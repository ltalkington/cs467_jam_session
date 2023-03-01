/**
 * For routes regarding medias
 */
const express = require("express");
const router = express.Router();
const media_controller = require("../controllers/medias_controllers");

router.use(
    express.urlencoded({
        extended: true,
    })
);

//creates a media
router.post("/media/new", async function (req, res) {
    let inserts = [
        req.body.media_file,
        req.body.user_id,
        req.body.recorded_date,
        req.body.title,
        req.body.description,
    ];
    try {
        media_controller.createMedia(inserts, res);
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(400).send(JSON.stringify(error));
    }
});

// updates media
router.put("/media/:id/edit", async function (req, res) {
    let inserts = [
        req.body.media_file,
        req.body.user_id,
        req.body.recorded_date,
        req.body.title,
        req.body.description,
        req.params.id
    ];
    try {
        media_controller.updateMedia(inserts, res);
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(400).send(JSON.stringify(error));
    }
});

//get single media
router.get("/media/:id", async function (req, res) {
    try {
        media_controller.getMediaById(req.params.id, res);
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(400).send(JSON.stringify(error));
    }
});

//get all media
router.get("/media/", async function (req, res) {
    try {
        media_controller.getMedia(res);
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(400).send(JSON.stringify(error));
    }
});

//deletes a media entry
router.delete("/media/:id/delete", async function (req, res) {
    try {
        media_controller.deleteMedia(req.params.id, res);
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(400).send(JSON.stringify(error));
    }
});

// ===================== Routes for Users Regarding Media ================

//get all media for a user
router.get("/user/:id/media", async function (req, res) {
    try {
        media_controller.getMediaByUserId(req.params.id, res);
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(400).send(JSON.stringify(error));
    }
});


module.exports = router;