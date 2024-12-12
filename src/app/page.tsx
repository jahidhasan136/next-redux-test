"use client";

import { useGetTodosQuery } from "@/redux/api/baseApi";

export default function Home() {
  const { data, error, isLoading } = useGetTodosQuery();

  if (isLoading) {
    return <div>Loading.....</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <main>
      {data?.map((todo: any) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </main>
  );
}
