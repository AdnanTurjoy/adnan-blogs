require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

const app = express();
app.use(express.json());
app.use(cors());

const dbUrl =
  "mongodb+srv://adnan:lfwv6gf5VefjjpXe@cluster0.zuejeov.mongodb.net/blog-v2";

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
});

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
// https://adnan-blog.up.railway.app/
app.listen(process.env.PORT || 5000, () => {
  console.log("Server started on port 5000");
});
