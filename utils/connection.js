require('dotenv').config()
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.SQL_HOST,
  user: process.env.SQL_USER,
  database : process.env.SQL_DATABASE,
  password: process.env.SQL_PASSWORD,
  port: process.env.SQL_PORT
  });
  
  connection.connect(function (err) {
    if (err) {
      console.log("failed to connect "+ err+ " ");
    } else {
      console.log("connected");
    }
  });
  
module.exports = { connection }  