const mongoose = require("mongoose");

const tasksSchema = new mongoose.Schema(
  {
    day: {
      type: Number,
      required: true,
    },
    done: {
      type: Boolean,
      required: true,
    },
    calories: {
      type: Number,
      required: true,
    },
    exercises: [
      {
        number: Number,
        practice: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Tasks = mongoose.model("Tasks", tasksSchema);

module.exports = Tasks;
