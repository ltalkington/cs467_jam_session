const db = require("./db");

async function getAllProfiles(user_id, res) {
  inserts = [user_id];
  query = "SELECT * FROM UserProfiles where user_id = ?";
  await db.pool.query(query, inserts, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

module.exports = {
  getAllProfiles,
};
