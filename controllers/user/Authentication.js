const User = require("../../model/User");

const register = async (req, res, next) => {
  const { firstname, lastname, email, password } = req?.body;

  const emailIsExist = await User.findOne({ email });

  if (emailIsExist) {
    const err = new Error("this email is already exist");
    next(err);
    return;
  }

  try {
    const newUser = await User.create({
      firstname,
      lastname,
      email,
      password,
      classes: [
        { class: "Abs", day: 1, lastDoneDate: new Date() },
        { class: "Full Body", day: 1, lastDoneDate: new Date() },
        { class: "Leg", day: 1, lastDoneDate: new Date() },
      ],
    });
    res.json(newUser);
  } catch (error) {
    res.json(error);
  }
};

const login = async (req, res, next) => {
  const user = await User.findOne({ email: req?.body?.email });
  if (!user || user.password !== req?.body?.password) {
    const err = new Error("check your email or password");
    err.statusCode = 500;
    next(err);
  }
  if (user && user?.password === req?.body?.password) {
    try {
      res.json(user);
    } catch (error) {
      res.json(error);
    }
  }
};

module.exports = { login, register };
