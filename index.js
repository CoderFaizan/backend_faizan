const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());
const port = process.env.PORT || 8181;
const connectToMongoDB = require("./db.js");
connectToMongoDB();
app.use(express.json())
const User = require("./models/User.js");



app.get("/data",async (req, res) => {
   try {
    const users = await User.find();

    if (!users || users.length === 0) {
      return res.status(404).json({ error: "No users found" });
    }

    return res.status(200).json({ message :"Success", users });
  } catch (error) {
    console.error("Error retrieving users:", error);
    return res.status(500).json({ error: "Unable to retrieve users" });
  }
});

app.get("/", (req, res) => {
  res.send("Faizan Rauf Web developer");
});
app.use('/user',require('./routes/userRoutes.js'))

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
