import * as mysql from 'mysql';
import 'dotenv/config';

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
});

module.exports.pool = pool;
