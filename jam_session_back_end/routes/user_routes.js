/**
 * Handles routes for User objects
 */
const express = require("express");
const router = express.Router();
const user_controller = require("../controllers/user_controllers");

router.use(express.urlencoded({ extended: true }));

const path = "/users";

// Create new user
router
  .post(path, async function (req, res) {
    let user_inserts = [
      req.body.auth_id,
      req.body.name,
      req.body.email_address,
    ];
    try {
      await user_controller.createUser(user_inserts, res);
    } catch (error) {
      console.log(JSON.stringify(error));
      res.status(400).send(JSON.stringify(error));
    }
  })

  // Reads a User
  .get(`${path}/:id`, async function (req, res) {
    try {
      await user_controller.getUserByAuthId(req.params.id, res);
    } catch (error) {
      console.log(JSON.stringify(error));
      res.status(404).send(JSON.stringify(error));
    }
  })
  // Reads a User
  .get(`${path}/:id/user_id`, async function (req, res) {
    try {
      await user_controller.getUserByUserId(req.params.id, res);
    } catch (error) {
      console.log(JSON.stringify(error));
      res.status(404).send(JSON.stringify(error));
    }
  })

  // Updates a User
  .put(`${path}/:id`, async function (req, res) {
    let inserts = [
      req.body.name,
      req.body.profile_link,
      req.body.email_address,
      req.params.id,
    ];
    try {
      await user_controller.updateUser(inserts, res);
    } catch (error) {
      console.log(JSON.stringify(error));
      res.status(400).send(JSON.stringify(error));
    }
  })

  // Deletes a User
  .delete(`${path}/:id`, async function (req, res) {
    try {
      await user_controller.deleteUser(req.params.id, res);
    } catch (error) {
      console.log(JSON.stringify(error));
      res.status(404).send(JSON.stringify(error));
    }
  });

module.exports = router;
