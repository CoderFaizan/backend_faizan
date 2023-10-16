const express = require("express");
const { createUser, showAllUsers, showUser, updateUser, deleteUser } = require("../controllers/userController");
const router = express.Router();

router.post("/add", createUser);
router.get("/showAll", showAllUsers);
router.post("/showSingle:id", showUser);
router.put("/updateUser:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;
