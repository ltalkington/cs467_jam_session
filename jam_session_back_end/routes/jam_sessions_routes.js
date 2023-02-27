/**
 * For routes regarding jam sessions
 */
const express = require("express");
const router = express.Router();

const js_controller = require("../controllers/jam_session_controllers");
router.use(
  express.urlencoded({
    extended: true,
  })
);
//creates a jam session
router.post("/jamsession/new", function (req, res) {
  let inserts = [
    req.body.userId,
    new Date(),
    new Date(req.body.gigDate),
    req.body.city,
    req.body.state,
    req.body.genre,
    req.body.instrumentsNeeded,
    req.body.experienceNeeded,
    req.body.fee,
    req.body.title,
    req.body.body,
  ];

  try {
    js_controller.createJamSession(inserts, res);
  } catch (error) {
    console.log(JSON.stringify(error));
    res.status(400).send(JSON.stringify(error));
  }
});

// updates rooms
router.put("/jamsession/:id/edit", function (req, res) {
  let inserts = [
    req.body.gigDate,
    req.body.city,
    req.body.state,
    req.body.genre,
    req.body.instrumentsNeeded,
    req.body.experienceNeeded,
    req.body.fee,
    req.body.title,
    req.body.body,
    req.params.id,
  ];
  try {
    js_controller.updateJamSession(inserts, res);
  } catch (error) {
    console.log(JSON.stringify(error));
    res.status(400).send(JSON.stringify(error));
  }
});

//displays all jam sessions
router.get("/jamsession", function (req, res) {
  try {
    js_controller.getJamSessions(res);
  } catch (error) {
    console.log(JSON.stringify(error));
    res.status(400).send(JSON.stringify(error));
  }
});

// get single jam session by id
router.get("/jamsession/:id", function (req, res) {
  query = "SELECT * FROM Jam_Sessions WHERE user_id = ?";
  try {
    js_controller.getJamSessionById(req.params.id, res);
  } catch (error) {
    console.log(JSON.stringify(error));
    res.status(400).send(JSON.stringify(error));
  }
});

// get jam sessions by user id
router.get("/user/:id/jamsession/", function (req, res) {
  query = "SELECT * FROM Jam_Sessions WHERE user_id = ?";
  try {
    js_controller.getJamSessionByUserId(req.params.id, res);
  } catch (error) {
    console.log(JSON.stringify(error));
    res.status(400).send(JSON.stringify(error));
  }
});

//deletes a jam session
router.delete("/jamsession/:id/delete", function (req, res) {
  try {
    js_controller.deleteJamSession(req.params.id, res);
  } catch (error) {
    console.log(JSON.stringify(error));
    res.status(400).send(JSON.stringify(error));
  }
});
module.exports = router;
