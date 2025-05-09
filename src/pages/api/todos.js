const todos = [
    { id: 1, task: "Học Next.js", completed: false },
    { id: 22, task: "Làm bài tập", completed: false }
];

export default function handler(req, res) {
    if (req.method === "GET") {
        res.status(200).json(todos);
    } else if (req.method === "POST") {
        const newTodo = req.body;
        todos.push({ id: todos.length + 1, ...newTodo });
        res.status(201).json({ message: "Todo added", todos });
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
