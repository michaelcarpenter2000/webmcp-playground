"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon, CircleIcon, Delete02Icon, SparklesIcon, Tick02Icon } from "@hugeicons/core-free-icons";

type Todo = { id: number; text: string; completed: boolean };
type ToolStatus = "checking" | "connected" | "unsupported" | "error";

type WebMCPTool = {
  name: string;
  title?: string;
  description: string;
  inputSchema?: Record<string, unknown>;
  execute: (input: Record<string, unknown>) => Promise<unknown>;
  annotations?: { readOnlyHint?: boolean };
};

type ModelContext = {
  registerTool: (tool: WebMCPTool, options?: { signal?: AbortSignal }) => Promise<void>;
};

declare global {
  interface Document {
    modelContext?: ModelContext;
  }
}

const initialTodos: Todo[] = [
  { id: 1, text: "Read the WebMCP overview", completed: true },
  { id: 2, text: "Try the Todo tools", completed: false },
];

export function TodoPlayground() {
  const [todos, setTodos] = useState(initialTodos);
  const [draft, setDraft] = useState("");
  const [toolStatus, setToolStatus] = useState<ToolStatus>("checking");
  const todosRef = useRef(todos);
  const nextId = useRef(3);

  useEffect(() => {
    todosRef.current = todos;
  }, [todos]);

  useEffect(() => {
    const context = document.modelContext;
    if (!context) {
      queueMicrotask(() => setToolStatus("unsupported"));
      return;
    }

    const controller = new AbortController();

    const tools: WebMCPTool[] = [
      {
        name: "add_todo",
        title: "Add todo",
        description: "Adds a new item to the visible todo list.",
        inputSchema: {
          type: "object",
          properties: { text: { type: "string", description: "The task to add", minLength: 1, maxLength: 120 } },
          required: ["text"],
          additionalProperties: false,
        },
        execute: async ({ text }) => {
          if (typeof text !== "string" || !text.trim()) throw new Error("A non-empty task is required.");
          const todo = { id: nextId.current++, text: text.trim().slice(0, 120), completed: false };
          setTodos((current) => [...current, todo]);
          return { success: true, todo };
        },
      },
      {
        name: "complete_todo",
        title: "Complete todo",
        description: "Marks a visible todo item as complete using its numeric ID.",
        inputSchema: {
          type: "object",
          properties: { id: { type: "number", description: "The ID of the task to complete" } },
          required: ["id"],
          additionalProperties: false,
        },
        execute: async ({ id }) => {
          if (typeof id !== "number") throw new Error("A numeric task ID is required.");
          const exists = todosRef.current.some((todo) => todo.id === id);
          if (!exists) throw new Error(`Todo ${id} was not found.`);
          setTodos((current) => current.map((todo) => (todo.id === id ? { ...todo, completed: true } : todo)));
          return { success: true, id };
        },
      },
      {
        name: "list_todos",
        title: "List todos",
        description: "Returns every todo currently visible on the page.",
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        annotations: { readOnlyHint: true },
        execute: async () => ({ todos: todosRef.current }),
      },
    ];

    Promise.all(tools.map((tool) => context.registerTool(tool, { signal: controller.signal })))
      .then(() => setToolStatus("connected"))
      .catch(() => {
        if (!controller.signal.aborted) setToolStatus("error");
      });

    return () => controller.abort();
  }, []);

  const remaining = useMemo(() => todos.filter((todo) => !todo.completed).length, [todos]);

  function addTodo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setTodos((current) => [...current, { id: nextId.current++, text: text.slice(0, 120), completed: false }]);
    setDraft("");
  }

  function toggleTodo(id: number) {
    setTodos((current) => current.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  }

  function removeTodo(id: number) {
    setTodos((current) => current.filter((todo) => todo.id !== id));
  }

  const statusCopy = {
    checking: "Checking browser support",
    connected: "3 tools registered",
    unsupported: "WebMCP API not available in this browser",
    error: "Tools could not be registered",
  }[toolStatus];

  return (
    <section className="playground-page example-docs-page page-enter">
      <section className="example-quickstart" aria-labelledby="quickstart-title">
        <div className="example-quickstart-copy">
          <h2 id="quickstart-title">Start with the demo</h2>
          <p>Add a task, complete it, and see the same actions this page makes available to an agent.</p>
          <a className="hero-primary" href="#demo">Jump to demo</a>
          <div className={`support-status status-${toolStatus}`}>
            <span />
            {statusCopy}
          </div>
        </div>
        <div className="example-code-preview" aria-label="Example WebMCP tool registration">
          <span>JavaScript</span>
          <pre><code>{`document.modelContext.registerTool({
  name: "add_todo",
  description: "Add a task",
  inputSchema: { ... },
  execute: addTodo
});`}</code></pre>
        </div>
      </section>

      <div className="example-docs-layout">
        <nav className="example-docs-nav" aria-label="On this page">
          <a href="#overview">Overview</a>
          <a href="#demo">Demo</a>
          <a href="#tools">Tools</a>
          <a href="#how-it-works">How it works</a>
          <a href="#browser-support">Browser support</a>
        </nav>

        <div className="example-docs-content">
          <section className="example-doc-section" id="overview">
            <h2>Overview</h2>
            <p>
              This Todo page has a regular interface anyone can use. It also describes three actions
              in a format a compatible browser agent can understand. Both use the same task list, so
              changes made by a person or an agent appear in one place.
            </p>
          </section>

          <section className="example-doc-section" id="demo">
            <h2>Demo</h2>
            <p>Use the list yourself, or ask a compatible browser agent to use one of the exposed tools.</p>

            <div className="playground-grid">
              <div className="todo-workspace">
                <div className="workspace-heading">
                  <div>
                    <h3>Today</h3>
                    <p>{remaining} {remaining === 1 ? "task" : "tasks"} left</p>
                  </div>
                </div>

                <form className="todo-form" onSubmit={addTodo}>
                  <label className="sr-only" htmlFor="new-todo">New task</label>
                  <input
                    id="new-todo"
                    value={draft}
                    onChange={(event) => setDraft(event.target.value)}
                    maxLength={120}
                    placeholder="Add a task"
                  />
                  <button type="submit" aria-label="Add task" disabled={!draft.trim()}>
                    <HugeiconsIcon icon={Add01Icon} size={19} strokeWidth={1.8} />
                  </button>
                </form>

                <div className="todos" aria-live="polite">
                  {todos.length ? todos.map((todo) => (
                    <div className={`todo-item${todo.completed ? " is-complete" : ""}`} key={todo.id}>
                      <button className="todo-toggle" onClick={() => toggleTodo(todo.id)} aria-label={`${todo.completed ? "Reopen" : "Complete"} ${todo.text}`}>
                        {todo.completed ? (
                          <HugeiconsIcon icon={Tick02Icon} size={15} />
                        ) : (
                          <HugeiconsIcon icon={CircleIcon} size={16} />
                        )}
                      </button>
                      <span>{todo.text}</span>
                      <small>#{todo.id}</small>
                      <button className="todo-delete" onClick={() => removeTodo(todo.id)} aria-label={`Delete ${todo.text}`}>
                        <HugeiconsIcon icon={Delete02Icon} size={16} strokeWidth={1.6} />
                      </button>
                    </div>
                  )) : <p className="empty-state">Nothing left. Add a task when you are ready.</p>}
                </div>
              </div>

              <aside className="tools-panel">
                <div className="tools-panel-heading">
                  <HugeiconsIcon icon={SparklesIcon} size={18} strokeWidth={1.6} aria-hidden="true" />
                  <div>
                    <h3>Exposed tools</h3>
                    <p>Available to a compatible browser agent.</p>
                  </div>
                </div>
                <div className="registered-tools">
                  <ToolLine name="add_todo" description="Create a task from text" />
                  <ToolLine name="complete_todo" description="Complete a task by ID" />
                  <ToolLine name="list_todos" description="Return the current list" />
                </div>
                <div className="try-prompt">
                  <span>Try asking</span>
                  <p>“Add ‘Read the draft’ to my list.”</p>
                </div>
              </aside>
            </div>
          </section>

          <section className="example-doc-section" id="tools">
            <h2>Tools</h2>
            <p>Each tool has one clear job and only asks for the information it needs.</p>
            <div className="tool-reference-list">
              <ToolReference name="add_todo" input="text" description="Adds a new task to the visible list." />
              <ToolReference name="complete_todo" input="id" description="Marks the matching task as complete." />
              <ToolReference name="list_todos" input="none" description="Returns every task and its current state." />
            </div>
          </section>

          <section className="example-doc-section" id="how-it-works">
            <h2>How it works</h2>
            <ol className="example-steps">
              <li><span>1</span><p>The page checks whether the browser supports WebMCP.</p></li>
              <li><span>2</span><p>It registers the three Todo tools with names, descriptions, and expected inputs.</p></li>
              <li><span>3</span><p>When an agent calls a tool, the same list shown in the demo is updated or returned.</p></li>
            </ol>
          </section>

          <section className="example-doc-section" id="browser-support">
            <h2>Browser support</h2>
            <p>
              The Todo interface works in a regular browser. Agent access requires a browser that
              provides the experimental WebMCP API. The status shown at the top tells you whether
              the three tools were registered.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

function ToolLine({ name, description }: { name: string; description: string }) {
  return (
    <div className="registered-tool">
      <code>{name}</code>
      <span>{description}</span>
    </div>
  );
}

function ToolReference({ name, input, description }: { name: string; input: string; description: string }) {
  return (
    <div className="tool-reference-row">
      <code>{name}</code>
      <span>{input}</span>
      <p>{description}</p>
    </div>
  );
}
