var mysql = require("mysql");
var pool = mysql.createPool({
  connectionLimit: 10,
  host: "jamsession.c4xx6wbnjy4u.us-east-1.rds.amazonaws.com",
  user: "jammeradmin",
  password: "JamSession2023",
  database: "jam_session",
});
module.exports.pool = pool;
