const db = require("./db");

async function getUserProfile(user_id, res) {
    const inserts = [user_id];
    const query = "SELECT * FROM User_Profile WHERE user_profile_id = ?;";
    await db.pool.query(query, inserts, function (error, results, fields) {
        return db.returnCallback(error, results, fields, res);
    });
}

async function createUserProfile(inserts, res) {
    const query =
        "INSERT INTO User_Profile (user_id, user_photo_link, location, instruments, experience, liked_genres, disliked_genres, portfolio_link, hourly_fee, availability, review_id) VALUES (?,?,?,?,?,?,?,?,?,?,?);";
    await db.pool.query(query, inserts, function (error, results, fields) {
        return db.returnCallback(error, results, fields, res);
    });
}

async function updateUserProfile(inserts, res) {
    const query = "UPDATE User_Profile SET user_photo_link=?, location=?, instruments=?, experience=?, liked_genres=?, disliked_genres=?, portfolio_link=?, hourly_fee=?, availability=?, review_id=? WHERE user_id=?;";
    await db.pool.query(query, inserts, function(error, results, fields) {
        return db.returnCallback(error, results, fields, res);
    });
}

async function deleteUserProfile(user_id, res) {
    const inserts = [user_id];
    const query = "DELETE FROM User_Profile WHERE user_id=?;";
    await db.pool.query(query, inserts, function (error, results, fields) {
        return db.returnCallback(error, results, fields, res);
    });
}

module.exports = {
    createUserProfile,
    getUserProfile,
    updateUserProfile,
    deleteUserProfile,
};