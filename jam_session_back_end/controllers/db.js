var mysql = require("mysql");
require("dotenv").config();

var pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB,
});

const returnCallback = (error, results, fields, res) => {
  if (error) {
    throw error;
  } else {
    res.status(200).send(results);
    return;
  }
};
module.exports = {
  pool,
  returnCallback,
};
