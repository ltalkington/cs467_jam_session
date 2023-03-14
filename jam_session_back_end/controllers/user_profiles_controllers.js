const db = require("./db");

async function getProfile(user_id, res) {
  inserts = [user_id];
  query = "SELECT * FROM User_Profile where user_id = ?";
  await db.pool.query(query, inserts, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

async function createProfile(inserts, res) {
  const query = "INSERT INTO User_Profile (user_id, display_name, user_photo_link, location, instruments, experience, liked_genres, disliked_genres, portfolio_link, hourly_fee, availability, review_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?);";
  await db.pool.query(query, inserts, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

async function updateProfile(inserts, res) {
  const query = "UPDATE User_Profile SET display_name=?, user_photo_link=?, location=?, instruments=?, experience=?, liked_genres=?, disliked_genres=?, portfolio_link=?, hourly_fee=?, availability=?, review_id=? WHERE user_id=?;";
  await db.pool.query(query, inserts, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

async function deleteProfile(id, res) {
  const query = `DELETE FROM User_Profile WHERE user_id=${id};`;
  await db.pool.query(query, [], function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

module.exports = {
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile
};
