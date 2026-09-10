const express = require("express");

const router = express.Router();

const userController = require("../controller/userController");


// Search users by department
router.get("/users/search",userController.searchUser);


// Search users by salary
router.get("/users/salary",userController.searchBySalary);


// Get user by ID
router.get("/users/:id",userController.getUserById);


// Get all users
router.get("/users",userController.getAllUsers);


// Add new user
router.post("/users",userController.addUser);


// Update user
router.put("/users/:id",userController.updateUser);


// Delete user
router.delete("/users/:id",userController.deleteUser);


module.exports = router;