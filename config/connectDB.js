const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose
      .connect(
        process.env.Db_KEY,
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
