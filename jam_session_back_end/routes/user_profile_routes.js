/**
 * Handles routes for user profiles
 */
const express = require("express");
const router = express.Router();
const profile_controller = require("../controllers/user_profiles_controllers");

router.use(express.urlencoded({ extended: true }));

const path = "/user_profiles";

// Create new profile
router
  .post(path, async function (req, res) {
    let inserts = [
      req.body.auth_id,
      req.body.display_name,
      req.body.user_photo_link,
      req.body.location,
      req.body.instruments,
      req.body.experience,
      req.body.liked_genres,
      req.body.disliked_genres,
      req.body.portfolio_link,
      req.body.hourly_fee,
      req.body.availability,
      req.body.review_id,
    ];
    try {
      await profile_controller.createUserProfile(inserts, res);
    } catch (error) {
      console.log(JSON.stringify(error));
      res.status(400).send(JSON.stringify(error));
    }
  })

  // Reads a user profile
  // Always reference user ID, not user profile ID.
  .get(`${path}/:id`, async function (req, res) {
    try {
      await profile_controller.getUserProfile(req.params.id, res);
    } catch (error) {
      console.log(JSON.stringify(error));
      res.status(404).send(JSON.stringify(error));
    }
  })

  // Updates a user profile
  .put(`${path}/:id`, async function (req, res) {
    let inserts = [
      req.body.user_photo_link,
      req.body.location,
      req.body.instruments,
      req.body.experience,
      req.body.liked_genres,
      req.body.disliked_genres,
      req.body.portfolio_link,
      req.body.hourly_fee,
      req.body.availability,
      req.body.review_id,
      req.params.id,
    ];
    try {
      await profile_controller.updateUserProfile(inserts, res);
    } catch (error) {
      console.log(JSON.stringify(error));
      res.status(400).send(JSON.stringify(error));
    }
  })

  // Deletes a user profile
  // Should probably not be used, rely on cascade delete when user is deleted.
  .delete(`${path}/:id`, async function (req, res) {
    try {
      await profile_controller.deleteUserProfile(req.params.id, res);
    } catch (error) {
      console.log(JSON.stringify(error));
      res.status(404).send(JSON.stringify(error));
    }
  });

module.exports = router;
