const db = require("./db");

async function getJamSessions(res) {
  query = "SELECT * FROM Jam_Sessions";
  await db.pool.query(query, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

async function getJamSessionByUserId(user_id, res) {
  inserts = [user_id];
  query = "SELECT * FROM Jam_Sessions WHERE user_id = ?";
  await db.pool.query(query, inserts, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

async function getJamSessionById(jam_session_id, res) {
  inserts = [jam_session_id];
  query = "SELECT * FROM Jam_Sessions WHERE jam_post_id = ?";
  await db.pool.query(query, inserts, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

async function createJamSession(inserts, res) {
  query =
    "INSERT INTO Jam_Sessions (user_id, posted_date, gig_date, jam_city, jam_state, genre, instruments_needed, experience_needed, fee, title, body) VALUES (?,?,?,?,?,?,?,?,?,?, ?)";
  await db.pool.query(query, inserts, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

async function updateJamSession(inserts, res) {
  query =
    "UPDATE Jam_Sessions SET gig_date=?, jam_city=?, jam_state=?, genre=?, instruments_needed=?, experience_needed=?, fee=?, title=?, body=? WHERE jam_post_id=?";
  await db.pool.query(query, inserts, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

async function deleteJamSession(inserts, res) {
  query = "DELETE FROM Jam_Sessions WHERE jam_post_id = ?";
  await db.pool.query(query, inserts, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

module.exports = {
  getJamSessions,
  getJamSessionByUserId,
  getJamSessionById,
  createJamSession,
  updateJamSession,
  deleteJamSession,
};