const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    id: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true,
    },
    age: {
        type: String,
        default: Date.now,
    },
});
module.exports = mongoose.model("User", userSchema);