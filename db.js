const mongoose = require("mongoose");
const dbUrl = process.env.DB_URL;
const connectToMongoDB = async () => {
  try {
   // Replace with your MongoDB connection URL
   const con =  await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to MongoDB ${con.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if there's an error connecting to the database
  }
};

module.exports = connectToMongoDB;
