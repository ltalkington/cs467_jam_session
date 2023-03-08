const db = require("./db");

async function getMessagesByReceiverId(message_id, res) {
  const inserts = [message_id];
  const query = "SELECT * FROM Messages WHERE receiverID= ?;";
  await db.pool.query(query, inserts, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

async function getMessagesBySenderId(message_id, res) {
  const inserts = [message_id];
  const query = "SELECT * FROM Messages WHERE senderID= ?;";
  await db.pool.query(query, inserts, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

async function getMessageById(message_id, res) {
  const inserts = [message_id];
  const query = "SELECT * FROM Messages WHERE messageID= ?;";
  await db.pool.query(query, inserts, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

async function createMessage(inserts, res) {
  const query =
    "INSERT INTO Messages (senderID, receiverID, content, created_at) VALUES (?,?,?,?);";
  await db.pool.query(query, inserts, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

async function updateMessage(inserts, res) {
  const query =
    "UPDATE Messages SET senderID=?, receiverID=?, content=? WHERE messageID=?;";
  await db.pool.query(query, inserts, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

async function deleteMessage(inserts, res) {
  const query = "DELETE FROM Messages WHERE messageID = ?;";
  await db.pool.query(query, inserts, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

module.exports = {
  getMessagesByReceiverId,
  getMessagesBySenderId,
  getMessageById,
  createMessage,
  updateMessage,
  deleteMessage,
};
