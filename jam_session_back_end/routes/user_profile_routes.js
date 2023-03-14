const express = require("express");
const router = express.Router();
const profile_controller = require("../controllers/user_profiles_controllers");

router.use(
  express.urlencoded({
    extended: true,
  })
);

const path = "/user_profiles";

router
    // creates a user profile
    .post(path, async function (req, res) {
      let profile_data = JSON.decode(req.body);
      let inserts = [
          profile_data.user_id,
          profile_data.display_name,
          profile_data.user_photo_link,
          profile_data.location,
          profile_data.instruments,
          profile_data.experience,
          profile_data.liked_genres,
          profile_data.disliked_genres,
          profile_data.portfolio_link,
          profile_data.hourly_fee,
          profile_data.availability,
          profile_data.review_id
      ];
      try {
        await profile_controller.createProfile(inserts, res);
      } catch (error) {
        console.log(JSON.stringify(error));
        res.status(400).send(JSON.stringify(error));
      }
    })

    // reads a user profile
    .get(`${path}/:id`, async function (req, res) {
      try {
        await profile_controller.getProfile(req.params.id, res);
      } catch (error) {
        console.log(JSON.stringify(error));
        res.status(400).send(JSON.stringify(error));
      }
    })

    // updates a user profile
    .put(`${path}/:id`, async function (req, res) {
        let profile_data = JSON.decode(req.body);
        let inserts = [
            profile_data.user_id,
            profile_data.display_name,
            profile_data.user_photo_link,
            profile_data.location,
            profile_data.instruments,
            profile_data.experience,
            profile_data.liked_genres,
            profile_data.disliked_genres,
            profile_data.portfolio_link,
            profile_data.hourly_fee,
            profile_data.availability,
            profile_data.review_id
        ];
        try {
            await profile_controller.updateProfile(inserts, res);
        } catch (error) {
            console.log(JSON.stringify(error));
            res.status(400).send(JSON.stringify(error));
        }
    })

    // deletes a user profile
    .delete(`${path}/:id`, async function (req, res) {
        try {
            await profile_controller.deleteUser(req.params.id, res);
        } catch (error) {
            console.log(JSON.stringify(error));
            res.status(404).send(JSON.stringify(error));
        }
    });

module.exports = router;
