const db = require("./db");

async function getMessagesByReceiverId(message_id) {
    inserts = [message_id];
    query = "SELECT * FROM Messages WHERE receiverID= ?";
    return db.pool.query(query, inserts);
}

async function getMessagesBySenderId(message_id) {
    inserts = [message_id];
    query = "SELECT * FROM Messages WHERE senderID= ?";
    return db.pool.query(query, inserts);
}

async function getMessageByMessageId(message_id) {
    inserts = [message_id];
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
    getMessagesByReceiverId,
    getMessagesBySenderId,
    getMessageByMessageId,
    createMessage,
    updateMessage,
    deleteMessage,
};