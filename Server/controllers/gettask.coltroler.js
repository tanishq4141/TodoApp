import Todo from "../models/todo.model.js";

export const getTasks = async (req, res) => {
  const userId = req.userId;

  try {
    const tasks = await Todo.find({ userId });

    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};  