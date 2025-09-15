import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ""
  },
  category: {
    type: String,
    required: true
  },
  isDone: {
    type: Boolean,
    default: false
  }
});

export default mongoose.model("Todo", TodoSchema);