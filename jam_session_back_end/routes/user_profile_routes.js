const express = require("express");
const router = express.Router();
const post_controller = require("../controllers/user_profiles_controllers");

router.use(
  express.urlencoded({
    extended: true,
  })
);

//get all profiles
router.get("/userprofile/:id", async function (req, res) {
  try {
    post_controller.getAllProfiles(req.params.id, res);
  } catch (error) {
    console.log(JSON.stringify(error));
    res.status(400).send(JSON.stringify(error));
  }
});

// Create new user
router.post("/userprofile", async function (req, res) {
  let user_inserts = [
    req.body.location,
    req.body.instruments,
    req.body.experience,
    req.body.fees,
    req.body.liked_genres,
    req.body.disliked_genres,
    req.body.user_id,
  ];
  try {
    await post_controller.createUserProfile(user_inserts, res);
  } catch (error) {
    console.log(JSON.stringify(error));
    res.status(400).send(JSON.stringify(error));
  }
});

// Updates a User
router.put(`/userprofile/:id`, async function (req, res) {
  let inserts = [
    req.body.location,
    req.body.instruments,
    req.body.experience,
    req.body.fees,
    req.body.liked_genres,
    req.body.disliked_genres,
    req.params.id,
  ];
  try {
    await post_controller.updateUserProfile(inserts, res);
  } catch (error) {
    console.log(JSON.stringify(error));
    res.status(400).send(JSON.stringify(error));
  }
});

module.exports = router;
