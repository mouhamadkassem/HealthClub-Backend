const User = require("../../model/User");

const doneTask = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.body.userId });

    user.classes.forEach((cls) => {
      if (cls.class == req.body.class) {
        cls.day++;
        cls.lastDoneDate = new Date();
      }
    });

    const updatedUser = await User.findByIdAndUpdate(user.id, user, {
      new: true,
    });
    res.json(updatedUser);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { doneTask };
