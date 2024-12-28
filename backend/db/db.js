const mongoose = require("mongoose");


function connectToDb() {
  mongoose.connect(process.env.DB_Connect)
    .then(() => {
      console.log("connected to db");

    })
    .catch((err) => {
      console.error("Error connecting DB", err);

    })
}

module.exports = connectToDb;