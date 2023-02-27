const db = require("./db");

async function getMessages() {
    query = "SELECT * FROM Messages";
    return db.pool.query(query);
}

async function getMessageByReceiverId(jam_session_id) {
    inserts = [jam_session_id];
    query = "SELECT * FROM Messages WHERE receiverID= ?";
    return db.pool.query(query, inserts);
}

async function getMessageByMessageId(jam_session_id) {
    inserts = [jam_session_id];
    query = "SELECT * FROM Messages WHERE messageID= ?";
    return db.pool.query(query, inserts);
}

async function createMessage(inserts) {
    sql =
        "INSERT INTO Messages (senderID, receiverID, content) VALUES (?,?,?)";
    return db.pool.query(sql, inserts);
}

async function updateMessage(inserts) {
    query =
        "UPDATE Messages SET senderID=?, receiverID=?, content=? WHERE messageID=?";
    return db.pool.query(query, inserts);
}

async function deleteMessage(inserts) {
    query = "DELETE FROM Messages WHERE messageID = ?";
    return db.pool.query(query, inserts);
}

module.exports = {
    getMessages,
    getMessageByReceiverId,
    getMessageByMessageId,
    createMessage,
    updateMessage,
    deleteMessage,
};