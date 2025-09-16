import Todo from "../models/todo.model.js";


export const addTasks = async (req, res) => {
  try {
  const { title, description, category } = req.body;

  if (!title || !category) {
    return res.status(400).json({ error: "title and category are required" });
  }

  const newTask = {
    id: String(tasks.length + 1),
    title,
    description: description || "",
    category,
    isDone: false
  };

    const newUser = todo.create({ name, userName, email, password: hasedPassword });
    
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}