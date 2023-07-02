const express = require("express");
const app = express();
const port = 3000;
const connectDb = require("./config/connectDB");
const errorHandling = require("./middlewares/error");
const userRoute = require("./routes/userRoute");
const shopRoute = require("./routes/shopRoute");
const cartRoute = require("./routes/cartRoute");
const classRoute = require("./routes/classRoute");
const dotenv = require("dotenv");
const cors = require("cors");
const messageRoute = require("./routes/messageRoute");

dotenv.config();

app.use(cors());
app.use(express.json());
connectDb();

// app.use(express.static("health-club"));

app.use("/users", userRoute);
app.use("/shop", shopRoute);
app.use("/cart", cartRoute);
app.use("/class", classRoute);
app.use("/message", messageRoute);

app.use(errorHandling);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
