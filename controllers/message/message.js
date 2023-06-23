const Message = require("../../model/Message");

const receiveMessage = async (req, res, next) => {
  try {
    const message = await Message.create({
      content: req?.body?.message,
      from: req?.body?.email,
    });

    res.json(message);
  } catch (error) {
    next(error);
  }
};

module.exports = { receiveMessage };
