/**
 * For routes regarding messages
 */
const express = require("express");
const router = express.Router();
const message_controller = require("../controllers/messages_controllers");

router.use(
  express.urlencoded({
    extended: true,
  })
);

//creates a message
router.post("/message/new", async function (req, res) {
  let inserts = [
    req.body.senderID,
    req.body.receiverID,
    req.body.content,
    new Date(),
  ];
  try {
    message_controller.createMessage(inserts, res);
  } catch (error) {
    console.log(JSON.stringify(error));
    res.status(400).send(JSON.stringify(error));
  }
});

// updates message
router.put("/message/:id/edit", async function (req, res) {
  let inserts = [
    req.body.senderID,
    req.body.receiverID,
    req.body.content,
    req.params.id,
  ];
  try {
    message_controller.updateMessage(inserts, res);
  } catch (error) {
    console.log(JSON.stringify(error));
    res.status(400).send(JSON.stringify(error));
  }
});

//get single message
router.get("/message/:id", async function (req, res) {
  try {
    message_controller.getMessageById(req.params.id, res);
  } catch (error) {
    console.log(JSON.stringify(error));
    res.status(400).send(JSON.stringify(error));
  }
});

//deletes a message
router.delete("/message/:id/delete", async function (req, res) {
  try {
    message_controller.deleteMessage(req.params.id, res);
  } catch (error) {
    console.log(JSON.stringify(error));
    res.status(400).send(JSON.stringify(error));
  }
});

// ===================== Routes for Users Regarding Messages ================

//get all messages where the current user is a recipient
router.get("/user/:id/messages/received", async function (req, res) {
  try {
    message_controller.getMessagesByReceiverId(req.params.id, res);
  } catch (error) {
    console.log(JSON.stringify(error));
    res.status(400).send(JSON.stringify(error));
  }
});

//get all messages where the current user is a sender
router.get("/user/:id/messages/sent", async function (req, res) {
  try {
    message_controller.getMessagesBySenderId(req.params.id, res);
  } catch (error) {
    console.log(JSON.stringify(error));
    res.status(400).send(JSON.stringify(error));
  }
});

module.exports = router;
