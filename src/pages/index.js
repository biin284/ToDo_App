import Link from 'next/link';

export default function Home() {
  const todos = [
    { id: 1, task: "Học Next.js", completed: false },
    { id: 2, task: "Làm bài tập", completed: false },
  ];

  return (
    <div className="todo-app">
      <h1>Quản lý công việc</h1>
      <form>
        <input type="text" placeholder="Thêm công việc..." />
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