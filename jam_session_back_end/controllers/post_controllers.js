const db = require("./db");

async function getPostsByPosterId(poster_id, res) {
    const inserts = [poster_id];
    const query = "SELECT * FROM Posts WHERE poster_id= ?;";
    await db.pool.query(query, inserts, function (error, results, fields) {
        return db.returnCallback(error, results, fields, res);
    });
}

async function getPostById(post_id, res) {
    const inserts = [post_id];
    const query = "SELECT * FROM Posts WHERE post_id= ?;";
    await db.pool.query(query, inserts, function (error, results, fields) {
        return db.returnCallback(error, results, fields, res);
    });
}

async function getPosts(res) {
    const query = "SELECT * FROM Posts;";
    await db.pool.query(query, function (error, results, fields) {
        return db.returnCallback(error, results, fields, res);
    });
}

async function createPost(inserts, res) {
    const dateNow = new Date(Date.now());
    inserts.push(dateNow);
    const query =
        "INSERT INTO Posts (poster_id, portfolio_link, post_type, posted_date) VALUES (?,?,?,?);";
    await db.pool.query(query, inserts, function (error, results, fields) {
        return db.returnCallback(error, results, fields, res);
    });
}

async function updatePost(inserts, res) {
    const query =
        "UPDATE Posts SET poster_id=?, portfolio_link=?, post_type=? WHERE post_id=?;";
    await db.pool.query(query, inserts, function (error, results, fields) {
        return db.returnCallback(error, results, fields, res);
    });

}

async function deletePost(inserts, res) {
    const query = "DELETE FROM Posts WHERE post_id = ?;";
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