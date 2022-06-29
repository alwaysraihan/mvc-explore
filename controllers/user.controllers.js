const { v4: uuidv4 } = require("uuid");
const User = require("../models/user.models");

// all users
const getAllUsers = (req, res) => {
    res.status(200).json({
        message: "all users",
    });
};

// get one user
const getOneUser = (req, res) => {
    res.status(200).json({
        message: "individual user",
    });
};

// create user
const createUser = async (req, res) => {
    try {
        const newUser = new User({
            id: uuidv4(),
            name: req.body.name,
            age: Number(req.body.age),
        });
        await newUser.save();
        res.status(201).json({
            newUser,
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
};
// update user
const updateUser = (req, res) => {
    res.status(200).json({
        message: "user is updated",
    });
};
// delete user
const deleteUser = (req, res) => {
    res.status(203).json({
        message: "user is updated",
    });
};

module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
};
