const mysql = require("mysql2");

//Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // Your MySQL usernname,
    user: "root",
    //Your MySQL password
    password: "85835093A1!@adam",
    database: "election",
  },
  console.log("Connected to the election database")
);

module.exports = db;
