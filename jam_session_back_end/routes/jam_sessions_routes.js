/**
 * For routes regarding jam sessions
 */
const express = require('express');
const router = express.Router();
const js_controller = require("../controllers/jam_session_controllers");
router.use(
    express.urlencoded({
        extended: true,
    })
);

//creates a jam session
router.post("/jamsession/create", async function (req, res) {
    let inserts = [
        req.body.userId,
        new Date(),
        new Date(req.body.gigDate),
        req.body.location,
        req.body.genre,
        req.body.instrumentsNeeded,
        req.body.experienceNeeded,
        req.body.fee,
    ];

    try {
        const result = await js_controller.createJamSession(inserts);
        res.send(result);
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(400).send(JSON.stringify(error));
    }
});

// updates jam session
router.put("/jamsession/:id/edit", async function (req, res) {
    let inserts = [
        req.body.gigDate,
        req.body.location,
        req.body.genre,
        req.body.instrumentsNeeded,
        req.body.experienceNeeded,
        req.body.fee,
        req.params.id,
    ];
    try {
        const result = await js_controller.updateJamSession(inserts);
        res.send(result);
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(400).send(JSON.stringify(error));
    }
});

//get all jam sessions
router.get("/jamsession", async function (req, res) {
    try {
        const result = await js_controller.getJamSessions();
        res.send(result);
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(400).send(JSON.stringify(error));
    }
});

//get single jam session
router.get("/jamsession/:id", async function (req, res) {
    try {
        const result = await js_controller.getJamSessionById([req.query.id]);
        res.send(result);
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(400).send(JSON.stringify(error));
    }
});

//deletes a jam session
router.delete("/jamsession/:id/delete", async function (req, res) {
    try {
        const result = await js_controller.deleteJamSession([req.query.id]);
        res.send(result);
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(400).send(JSON.stringify(error));
    }
});

module.exports = router;