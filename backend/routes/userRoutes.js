const express = require("express");
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const { getUsers, getUserById, deleteUser } = require("../controllers/userController");

const router = express.Router();

//User Managment Routes
router.get("/",protect,adminOnly,getUsers); //Get all users(admin only)
router.get("/:id",protect,getUserById); //Get specfic user


module.exports = router;