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

module.exports = router;
