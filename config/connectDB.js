const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://mohamadkassem101:tdCuwAeAuyejFryU@healthclub.z6gq5bu.mongodb.net/?retryWrites=true&w=majority",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then(() => console.log("database is connect"));
  } catch (error) {
    console.log("database Error : ", error);
  }
};

module.exports = db;
