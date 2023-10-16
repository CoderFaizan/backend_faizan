const User = require("../models/User"); // Adjust the path to your User model file

// Function to insert a new user into the database
async function createUser(req, res) {
  try {
    const { name, email, password ,image} = req.body; // Assuming you're sending user data in the request body

    const newUser = new User({
      name,
      email,
      password,image
    });

    await newUser.save();

    return res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Unable to create user" });
  }
}

async function deleteUser(req, res) {
  try {
    const userId = req.params.id; // Assuming you're passing the user ID in the request parameters

    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).json({ error: "Unable to delete user" });
  }
}
async function showUser(req, res) {
  try {
    const userId = req.params.id; // Assuming you're passing the user ID in the request parameters

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.error("Error retrieving user:", error);
    return res.status(500).json({ error: "Unable to retrieve user" });
  }
}
async function updateUser(req, res) {
  try {
    const userId = req.params.id; // Assuming you're passing the user ID in the request parameters
    const { name, email, password } = req.body; // Assuming you're sending user data in the request body

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name, email, password },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    return res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({ error: "Unable to update user" });
  }
}
async function showAllUsers(req, res) {
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
}
module.exports = { createUser ,deleteUser,showAllUsers,showUser,updateUser};
