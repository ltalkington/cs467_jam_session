const db = require("./db");

async function getMediaByUserId(media_id, res) {
    const inserts = [media_id];
    const query = "SELECT * FROM Media WHERE user_id= ?;";
    await db.pool.query(query, inserts, function (error, results, fields) {
        return db.returnCallback(error, results, fields, res);
    });
}

async function getMediaById(media_id, res) {
    const inserts = [media_id];
    const query = "SELECT * FROM Media WHERE media_id= ?;";
    await db.pool.query(query, inserts, function (error, results, fields) {
        return db.returnCallback(error, results, fields, res);
    });
}

async function getMedia(res) {
    const query = "SELECT * FROM Media;";
    await db.pool.query(query, inserts, function (error, results, fields) {
        return db.returnCallback(error, results, fields, res);
    });
}

async function createMedia(inserts, res) {
    const uploadDate = new Date(Date.now);
    inserts.append(uploadDate);
    const query =
        "INSERT INTO Media (media_file, user_id, recorded_date, title, description, upload_date) VALUES (?,?,?,?,?,?);";
    await db.pool.query(query, inserts, function (error, results, fields) {
        return db.returnCallback(error, results, fields, res);
    });
}

async function updateMedia(inserts, res) {
    const query =
        "UPDATE Media SET media_file=?, user_id=?, recorded_date=?, title=?, description=? WHERE media_id=?;";
    await db.pool.query(query, inserts, function (error, results, fields) {
        return db.returnCallback(error, results, fields, res);
    });

}

async function deleteMedia(inserts, res) {
    const query = "DELETE FROM Media WHERE media_id = ?;";
    await db.pool.query(query, inserts, function (error, results, fields) {
        return db.returnCallback(error, results, fields, res);
    });
}

module.exports = {
    getMediaByUserId,
    getMediaById,
    getMedia,
    createMedia,
    updateMedia,
    deleteMedia,
};