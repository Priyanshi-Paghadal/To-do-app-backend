// const Todo = require('../models/todoModel');

// module.exports.addTodo = async (req, res) => {
//     try {
//       const addTask = await Todo.create(req.body);
//       res.status(200).json({ msg: 'Task added successfully', Todo: addTask });
//     } catch (err) {
//       res.status(400).json({ msg: 'Failed to add task', Error: err });
//     }
// };

// module.exports.allTodo = async (req, res) => {
//     try {
//       const allTask = await Todo.find();
//       res.status(200).json({ msg: 'Tasks fetched', Todo: allTask });
//     } catch (err) {
//       res.status(400).json({ msg: 'Error', Error: err });
//     }
// };

// module.exports.deleteTodo = async (req, res) => {
//     try {
//       const id  = req.params.id;
//       const deletedTask = await Todo.findByIdAndDelete(id);
//       res.status(200).json({ msg: 'Task deleted', deletedTask });
//     } catch (err) {
//       res.status(400).json({ msg: 'Delete failed', Error: err });
//     }
// };

// module.exports.updateStatus = async (req, res) => {
//   try {
//     const id  = await Todo.findById(req.params.id);
//     const status = req.body.status; 
//     const updatedTask = await Todo.findByIdAndUpdate(id,{ taskType : status },{ new: true });
//     if (!updatedTask) {
//       return res.status(404).json({ msg: "Task not found" });
//     }
//     res.status(200).json({ msg: "Status updated", Todo: updatedTask });
//   } catch (err) {
//     res.status(400).json({ msg: "Status update failed", Error: err });
//   }
// };

const Todo = require('../models/todoModel');

module.exports.addTodo = async (req, res) => {
  try {
    const addTask = await Todo.create(req.body);
    return res.status(200).json({ msg: 'Task added successfully', Todo: addTask });
  } catch (err) {
    return res.status(400).json({ msg: 'Failed to add task', Error: err });
  }
};

module.exports.allTodo = async (req, res) => {
  try {
    const allTask = await Todo.find();
    return res.status(200).json({ msg: 'Tasks fetched', Todo: allTask });
  } catch (err) {
    return res.status(400).json({ msg: 'Error', Error: err });
  }
};

module.exports.deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedTask = await Todo.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ msg: 'Task not found' });
    }
    return res.status(200).json({ msg: 'Task deleted', deletedTask });
  } catch (err) {
    return res.status(400).json({ msg: 'Delete failed', Error: err });
  }
};

module.exports.updateStatus = async (req, res) => {
  try {
    const id = req.params.id;
    const status = req.body.status;

    const updatedTask = await Todo.findByIdAndUpdate(
      id,
      { taskType: status },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ msg: "Task not found" });
    }

    return res.status(200).json({ msg: "Status updated", Todo: updatedTask });
  } catch (err) {
    return res.status(400).json({ msg: "Status update failed", Error: err });
  }
};

module.exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { taskName, taskType } = req.body;

    const updatedTask = await Todo.findByIdAndUpdate(
      id,
      { taskName, taskType },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ msg: "Task not found" });
    }

    return res.status(200).json({ msg: "Task updated successfully", Todo: updatedTask });
  } catch (err) {
    return res.status(400).json({ msg: "Failed to update task", Error: err });
  }
};
