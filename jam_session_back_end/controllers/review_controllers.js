const db = require("./db");

async function getReviewsByReviewerId(reviewer_id, res) {
  const inserts = [reviewer_id];
  const query = "SELECT * FROM Review WHERE reviewer_id= ?;";
  await db.pool.query(query, inserts, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

async function getReviews(res) {
  const query = "SELECT * FROM Review;";
  await db.pool.query(query, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

async function getReviewById(review_id, res) {
  const inserts = [review_id];
  const query = "SELECT * FROM Review WHERE review_id= ?;";
  await db.pool.query(query, inserts, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

async function createReview(inserts, res) {
  const query =
    "INSERT INTO Review (reviewer_id, star_rating, comments, reviewed_id, date_created) VALUES (?,?,?,?,?);";
  await db.pool.query(query, inserts, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

async function updateReview(inserts, res) {
  const query =
    "UPDATE Review SET reviewer_id=?, star_rating=?, comments=? WHERE review_id=?;";
  await db.pool.query(query, inserts, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

async function deleteReview(inserts, res) {
  const query = "DELETE FROM Review WHERE review_id = ?;";
  await db.pool.query(query, inserts, function (error, results, fields) {
    return db.returnCallback(error, results, fields, res);
  });
}

module.exports = {
  getReviewsByReviewerId,
  getReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
};
