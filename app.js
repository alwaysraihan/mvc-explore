const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/user.route");
require("./config/db");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/users", userRouter);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/./views/index.html");
});
// api/users : GET

// api/users/:id : GET
// api/users/ : POST
// api/users/:ID : PATCH
// api/users/:ID : DELETE

// route not found error
app.use((req, res, next) => {
    res.status(404).json({ message: "Route Not Found" });
});

// handling severe error
app.use((err, req, res, next) => {
    res.status(500).json({
        message: "something broke",
    });
});
module.exports = app;
