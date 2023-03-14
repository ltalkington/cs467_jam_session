const db = require("./db");

async function getAllProfiles(user_id, res) {
  inserts = [user_id];
  query = "SELECT * FROM UserProfiles where user_id = ?";
  await db.pool.query(query, inserts, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}
async function createUserProfile(inserts, res) {
  const query =
    "INSERT INTO UserProfiles (location, instruments, experience, fees, liked_genres, disliked_genres, user_id ) VALUES (?,?,?,?,?,?,?);";
  await db.pool.query(query, inserts, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}
async function updateUserProfile(inserts, res) {
  const query =
    "UPDATE UserProfiles SET location=?, instruments=?, experience=?, fees=?, liked_genres=?, disliked_genres=? WHERE user_id=?;";
  await db.pool.query(query, inserts, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

module.exports = {
  getAllProfiles,
  createUserProfile,
  updateUserProfile,
};
