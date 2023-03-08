/**
 * For routes regarding posts
 */
const express = require("express");
const router = express.Router();
const post_controller = require("../controllers/text_post_controllers");

router.use(
  express.urlencoded({
    extended: true,
  })
);

//creates a post
router.post("/textpost/new", async function (req, res) {
  let inserts = [
    req.body.user_id,
    req.body.post_body,
    req.body.post_likes,
    new Date(),
  ];
  try {
    post_controller.createPost(inserts, res);
  } catch (error) {
    console.log(JSON.stringify(error));
    res.status(400).send(JSON.stringify(error));
  }
});

// updates post
router.put("/textpost/:Text_Post_id/edit", async function (req, res) {
  let inserts = [
    req.body.user_id,
    req.body.post_likes,
    req.body.post_body,
    req.body.post_date,
    req.params.Text_Post_id,
  ];
  console.log(inserts);
  try {
    post_controller.updatePost(inserts, res);
  } catch (error) {
    console.log(JSON.stringify(error));
    res.status(400).send(JSON.stringify(error));
  }
});

//get single user post
router.get("/textpost/:id", async function (req, res) {
  try {
    post_controller.getPostsByPosterId(req.params.id, res);
  } catch (error) {
    console.log(JSON.stringify(error));
    res.status(400).send(JSON.stringify(error));
  }
});

//get all posts
router.get("/textpost", async function (req, res) {
  try {
    post_controller.getPosts(res);
    console.log(res);
  } catch (error) {
    console.log(JSON.stringify(error));
    res.status(400).send(JSON.stringify(error));
  }
});

//deletes a post
router.delete("/textpost/:id/delete", async function (req, res) {
  try {
    post_controller.deletePost(req.params.id, res);
  } catch (error) {
    console.log(JSON.stringify(error));
    res.status(400).send(JSON.stringify(error));
  }
});

// ===================== Routes for Users Regarding Posts ================

//get all posts where the current user is a recipient
router.get("/textuser/:id/posts/", async function (req, res) {
  try {
    post_controller.getPostsByPosterId(req.params.id, res);
  } catch (error) {
    console.log(JSON.stringify(error));
    res.status(400).send(JSON.stringify(error));
  }
});

module.exports = router;
