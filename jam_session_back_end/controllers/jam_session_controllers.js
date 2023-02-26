const db = require('../models/db');

async function getJamSessions() {
    query = "SELECT * FROM Jam_Sessions";
    return db.pool.query(query);
}

async function getJamSessionById(jam_session_id) {
    inserts = [jam_session_id];
    query = "SELECT * FROM Jam_Sessions WHERE jam_post_id = ?";
    return db.pool.query(query, inserts);
}

async function createJamSession(inserts) {
    sql =
        "INSERT INTO Jam_Sessions (user_id, posted_date, gig_date, location, genre, instruments_needed, experience_needed, fee) VALUES (?,?,?,?,?,?,?,?)";
    return db.pool.query(sql, inserts);
}

async function updateJamSession(inserts) {
    query =
        "UPDATE Jam_Sessions SET gig_date=?, location=?, genre=?, instruments_needed=?, experience_needed=?, fee=? WHERE jam_post_id=?";
    return db.pool.query(query, inserts);
}

async function deleteJamSession(inserts) {
    query =
        "DELETE FROM Jam_Sessions WHERE jam_post_id = ?";
    return db.pool.query(query, inserts);
}

module.exports = {
    getJamSessions,
    getJamSessionById,
    createJamSession,
    updateJamSession,
    deleteJamSession
}