const cors = require("cors");
const express = require("express");
const authRoutes = require("./Routes/authRoutes");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json({ extended: true }));
var bodyParser = require("body-parser");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
//connect mongodb
mongoose
  .connect(
    "mongodb+srv://tabish123:tabish12345@cluster0.zffy323.mongodb.net/Authentication",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database Connection Successful");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(
  cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "POST"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send({
    message: "welcome to the semester project ",
  });
});

//routes

app.use("/api", authRoutes);
app.use(express.json());

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server started on  Port " + PORT);
});
