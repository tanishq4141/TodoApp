import Todo from "../models/todo.model.js";

export const DeleteTask = async (req, res) => {
  const { id } = req.params;
  const userId = req.userId;

  try {
    const task = await Todo.findOneAndDelete({ _id: id, userId });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};