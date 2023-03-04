const db = require("./db");

async function getUserById(user_id, res) {
    const inserts = [user_id];
    const query = "SELECT * FROM Users WHERE user_id = ?;";
    await db.pool.query(query, inserts, function (error, results, fields) {
        return db.returnCallback(error, results, fields, res);
    });
}

async function createUser(inserts, res) {
    const query = "INSERT INTO Users (name, profile_link, email_address) VALUES (?,?,?);";
    await db.pool.query(query, inserts, function (error, results, fields) {
        return db.returnCallback(error, results, fields, res);
    });
}

async function updateUser(inserts, res) {
    const query = "UPDATE Users SET name=?, profile_link=?, email_address=? WHERE user_id=?;";
    await db.pool.query(query, inserts, function (error, results, fields) {
        return db.returnCallback(error, results, fields, res);
    });
}

async function deleteUser(user_id, res) {
    const inserts = [user_id];
    const query = "DELETE FROM Users WHERE user_id=?;";
    await db.pool.query(query, inserts, function (error, results, fields) {
        return db.returnCallback(error, results, fields, res);
    });
}

module.exports = {
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};