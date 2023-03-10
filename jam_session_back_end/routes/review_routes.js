/**
 * For routes regarding reviews
 */
const express = require("express");
const router = express.Router();
const review_controller = require("../controllers/review_controllers");

router.use(
    express.urlencoded({
        extended: true,
    })
);

//creates a review
router.post("/review/new", async function (req, res) {
    let inserts = [
        req.body.reviewer_id,
        req.body.star_rating,
        req.body.comments,
        req.body.reviewed_id,
        new Date(),
    ];
    try {
        review_controller.createReview(inserts, res);
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(400).send(JSON.stringify(error));
    }
});

// updates review
router.put("/review/:id/edit", async function (req, res) {
    let inserts = [
        req.body.reviewer_id,
        req.body.star_rating,
        req.body.comments,
        req.params.id
    ];
    try {
        review_controller.updateReview(inserts, res);
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(400).send(JSON.stringify(error));
    }
});

//get single review
router.get("/review/:id", async function (req, res) {
    try {
        review_controller.getReviewById(req.params.id, res);
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(400).send(JSON.stringify(error));
    }
});

//get all reviews
router.get("/review/", async function (req, res) {
    try {
        review_controller.getReviews(res);
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(400).send(JSON.stringify(error));
    }
});

//deletes a review
router.delete("/review/:id/delete", async function (req, res) {
    try {
        review_controller.deleteReview(req.params.id, res);
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(400).send(JSON.stringify(error));
    }
});

// ===================== Routes for Users Regarding Reviews ================

//get all reviews where the current user is a recipient
router.get("/user/:id/reviews/", async function (req, res) {
    try {
        review_controller.getReviewsByReviewerId(req.params.id, res);
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(400).send(JSON.stringify(error));
    }
});

module.exports = router;