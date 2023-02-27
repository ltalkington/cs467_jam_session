const db = require("./db");

async function getJamSessions() {
  query = "SELECT * FROM Jam_Sessions";
  return db.pool.query(query);
}

async function getJamSessionByUserId(jam_session_id) {
  inserts = [jam_session_id];
  query = "SELECT * FROM Jam_Sessions WHERE user_id = ?";
  return db.pool.query(query, inserts);
}

async function createJamSession(inserts) {
  sql =
    "INSERT INTO Jam_Sessions (user_id, posted_date, gig_date, jam_city, jam_state, genre, instruments_needed, experience_needed, fee, title, body) VALUES (?,?,?,?,?,?,?,?,?,?, ?)";
  return db.pool.query(sql, inserts);
}

async function updateJamSession(inserts) {
  query =
    "UPDATE Jam_Sessions SET gig_date=?, jam_city=?, jam_state=?, genre=?, instruments_needed=?, experience_needed=?, fee=?, title=?, body=? WHERE jam_post_id=?";
  return db.pool.query(query, inserts);
}

async function deleteJamSession(inserts) {
  query = "DELETE FROM Jam_Sessions WHERE jam_post_id = ?";
  return db.pool.query(query, inserts);
}

module.exports = {
  getJamSessions,
  getJamSessionByUserId,
  createJamSession,
  updateJamSession,
  deleteJamSession,
};
