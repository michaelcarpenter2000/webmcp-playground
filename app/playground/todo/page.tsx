import type { Metadata } from "next";
import { TodoPlayground } from "./todo-playground";

export const metadata: Metadata = { title: "Todo example" };

export default function TodoPage() {
  return <TodoPlayground />;
}
