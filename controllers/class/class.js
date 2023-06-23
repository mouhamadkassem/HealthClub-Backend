const Class = require("../../model/Class");
const Tasks = require("../../model/Tasks");

const fetchClasses = async (req, res, next) => {
  try {
    const classes = await Class.find().populate("tasks");
    res.json(classes);
  } catch (error) {
    next(error);
  }
};
const fetchClass = async (req, res, next) => {
  try {
    const classes = await Class.findOne({ _id: req.params.id }).populate(
      "tasks"
    );
    res.json(classes);
  } catch (error) {
    next(error);
  }
};

module.exports = { fetchClasses, fetchClass };
