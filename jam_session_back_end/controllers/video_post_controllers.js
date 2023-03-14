const db = require("./db");

async function getPostsByPosterId(poster_id, res) {
  const inserts = poster_id;
  const query = "SELECT * FROM Video_Posts WHERE user_id= ?;";
  await db.pool.query(query, inserts, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

async function getPostById(post_id, res) {
  const inserts = [post_id];
  const query = "SELECT * FROM Video_Posts WHERE Video_Post_id= ?;";
  await db.pool.query(query, inserts, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

async function getPosts(res) {
  const query = "SELECT * FROM Video_Posts;";
  await db.pool.query(query, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

async function createPost(inserts, res) {
  const query =
    "INSERT INTO Video_Posts (user_id, video_file_location, post_body, post_likes, post_date) VALUES (?,?,?,?,?);";
  await db.pool.query(query, inserts, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

async function updatePost(inserts, res) {
  const query =
    "UPDATE Video_Posts SET user_id=?, post_likes=?, post_body=?, post_date=?, video_file_location=? WHERE Video_Post_id=?;";
  await db.pool.query(query, inserts, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

async function deletePost(inserts, res) {
  const query = "DELETE FROM Video_Posts WHERE Video_Post_id = ?;";
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
