const express = require("express");
const app = express();
const tasks = require("../Node-JS-Testing-Star__/Task");
require("./db/connect");
const connectDB = require("./db/connect");
require("dotenv").config();

//Midleware

app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Hello");
});
app.use("/api/v1/tasks", tasks);

const port = 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is runing ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
