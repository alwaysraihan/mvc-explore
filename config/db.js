const mongoose = require("mongoose");
const config = require("./config");
const dbURL = config.db.url;
mongoose
    .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("YAY! Dtabase is conected");
    })
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });
