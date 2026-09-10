const fs = require("fs");
const path = require("path");

const filepath = path.join(__dirname, "../data/user.json");


// Get all users
const getAll = () => {
    const data = fs.readFileSync(filepath, "utf-8");
    return JSON.parse(data);
};


// Get user by ID
const getById = (id) => {
    const users = getAll();
    return users.find((user) => user.userId === id);
};


// Add new user
const addUser = (newUser) => {
    const users = getAll();
    users.push(newUser);
    fs.writeFileSync(filepath, JSON.stringify(users));
    return newUser;
};


// Delete user
const deleteUser = (id) => {
    const users = getAll();
    const updatedUsers = users.filter((user) => user.userId != id);
    fs.writeFileSync(filepath,JSON.stringify(updatedUsers));
    return updatedUsers;
};


// Update user
const updateUser = (id, updatedUser) => {
    const users = getAll();
    const index = users.findIndex(
        (user) => user.userId === id
    );
    if (index !== -1) {
        users[index] = {...users[index],...updatedUser};
        fs.writeFileSync(filepath,JSON.stringify(users));
        return users[index];
    }
    return null;
};


// Search user by department
const searchUser = (department) => {
    const users = getAll();
    return users.filter(
        (user) =>user.department.toLowerCase() ===department.toLowerCase()
    );
};


// Search user by salary
const searchBySalary = (minSalary, maxSalary) => {
    const users = getAll();
    return users.filter((user) =>user.salary >= minSalary &&user.salary <= maxSalary);
};


module.exports = {
    getAll,
    getById,
    addUser,
    deleteUser,
    updateUser,
    searchUser,
    searchBySalary
};