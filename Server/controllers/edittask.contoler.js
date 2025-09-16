import Todo from "../models/todo.model.js";


export cosnt editTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, category, isDone } = req.body;
  const userId = req.userId;

  try {
    const task = await Todo.findOne({ _id: id, userId });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (category !== undefined) task.category = category;
    if (isDone !== undefined) task.isDone = isDone;

    await task.save();

    res.status(200).json({ message: "Task updated successfully", task });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};