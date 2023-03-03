/**
 * For routes regarding posts
 */
const express = require("express");
const router = express.Router();
const post_controller = require("../controllers/post_controllers");

router.use(
    express.urlencoded({
        extended: true,
    })
);

//creates a post
router.post("/post/new", async function (req, res) {
    let inserts = [
        req.body.poster_id,
        req.body.portfolio_link,
        req.body.post_type
    ];
    try {
        post_controller.createPost(inserts, res);
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(400).send(JSON.stringify(error));
    }
});

// updates post
router.put("/post/:id/edit", async function (req, res) {
    let inserts = [
        req.body.poster_id,
        req.body.portfolio_link,
        req.body.post_type,
        req.params.id
    ];
    try {
        post_controller.updatePost(inserts, res);
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(400).send(JSON.stringify(error));
    }
});

//get single post
router.get("/post/:id", async function (req, res) {
    try {
        post_controller.getPostById(req.params.id, res);
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(400).send(JSON.stringify(error));
    }
});

//get all posts
router.get("/post", async function (req, res) {
    try {
        post_controller.getPosts(res);
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(400).send(JSON.stringify(error));
    }
});

//deletes a post
router.delete("/post/:id/delete", async function (req, res) {
    try {
        post_controller.deletePost(req.params.id, res);
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(400).send(JSON.stringify(error));
    }
});

// ===================== Routes for Users Regarding Posts ================

//get all posts where the current user is a recipient
router.get("/user/:id/posts/", async function (req, res) {
    try {
        post_controller.getPostsByPosterId(req.params.id, res);
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(400).send(JSON.stringify(error));
    }
});


module.exports = router;