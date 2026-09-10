const express = require("express");
const app = express();
app.use(express.json());

const users = require("./data/user");


app.get("/", (req, res) => {
    res.send("Hello, World!");
});

const userRoutes = require("./route/userRoutes");
app.use("/", userRoutes);

// Get users
app.get("/users", (req, res) => {
    const department = req.query.department;
    if (!department) {
        return res.json(users);
    }
    const filteredUsers = users.filter(
        (user) =>user.department.toLowerCase() ===department.toLowerCase()
    );
    res.json(filteredUsers);

});


// Get user by ID
app.get("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(
        (user) => user.userId === userId
    );
    res.status(200).json(user);

});


// Add new user
app.post("/users", (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);

});




app.listen(3000, () => {
    console.log("Server is running on port 3000");
}); 