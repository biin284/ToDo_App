import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await fetch("/api/todos");
      if (!res.ok) throw new Error("Failed to fetch todos");
      const data = await res.json();
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!newTask) return;

    const newTodo = { task: newTask, completed: false };

    try {
      const res = await fetch("/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
      if (!res.ok) throw new Error("Failed to add todo");
      const data = await res.json();
      console.log(data.message); // Should log "Todo added"
      fetchTodos(); // Refresh the list
      setNewTask(""); // Clear input
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  }

  return (
    <div className="todo-app">
      <h1>Quản lý công việc</h1>
      <form onSubmit={handleAddTodo}>
        <input type="text"
          placeholder="Thêm công việc..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Thêm</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
      <Link href="/login">Đi đến trang đăng nhập</Link>
    </div>
  );
}