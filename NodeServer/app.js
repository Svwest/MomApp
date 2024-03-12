const express = require("express");
const mongoose = require("mongoose");
const { json } = require("body-parser");
const usersRoutes = require("./routes/usersRoutes.js");
const postsRoutes = require("./routes/postsRoutes.js");
require("dotenv").config();
const Post = require("./models/post.js");

const PORT = 5000;
const DB_URL = "mongodb+srv://svwestil:dbpass@cluster0.i8vjao6.mongodb.net";
const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  res.status(200).json("Welcome to backend zone");
});




app.use('/users',usersRoutes);
app.use('/posts',postsRoutes);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("DB connected");
  
  } catch (e) {
    console.log(e);
  }
  finally {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  }
}

startApp();
