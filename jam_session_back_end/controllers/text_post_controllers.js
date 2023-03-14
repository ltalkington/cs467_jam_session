const db = require("./db");

async function getPostsByPosterId(poster_id, res) {
  const inserts = poster_id;
  const query = "SELECT * FROM Text_Posts WHERE user_id= ?;";
  await db.pool.query(query, inserts, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

async function getPostById(post_id, res) {
  const inserts = [post_id];
  const query = "SELECT * FROM Text_Posts WHERE Text_Post_id= ?;";
  await db.pool.query(query, inserts, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

async function getPosts(res) {
  const query = "SELECT * FROM Text_Posts;";
  await db.pool.query(query, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

async function createPost(inserts, res) {
  const query =
    "INSERT INTO Text_Posts (user_id, post_body, post_likes, post_date) VALUES (?,?,?,?);";
  await db.pool.query(query, inserts, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

async function updatePost(inserts, res) {
  const query =
    "UPDATE Text_Posts SET user_id=?, post_likes=?, post_body=?, post_date=? WHERE Text_Post_id=?;";
  await db.pool.query(query, inserts, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

async function deletePost(inserts, res) {
  const query = "DELETE FROM Text_Posts WHERE Text_Post_id = ?;";
  await db.pool.query(query, inserts, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

module.exports = {
  getPostsByPosterId,
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
