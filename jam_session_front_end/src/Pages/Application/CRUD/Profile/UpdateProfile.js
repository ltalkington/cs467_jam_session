import ResponsiveDrawer from "../../../../Components/Application/Sidebar/Sidebar.js";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";

function UpdateUserProfile({ updateProfile }) {
  const { user } = useAuth0();
  const [userProfile, setUserProfile] = useState({});
  const [location, setLocation] = useState();
  const [instruments, setInstruments] = useState();
  const [experience, setExperience] = useState();
  const [liked, setLiked] = useState();
  const [disliked, setDisliked] = useState();
  const [fees, setFee] = useState();
  const [userName, setUserName] = useState();
  const [userID, setUserID] = useState();
  const navigate = useNavigate();

  const loadUserProfile = async () => {
    const auth_id = user.sub.split("|")[1];

    const userresponse = await fetch(
      process.env.REACT_APP_API_SERVER_URL + "/users/" + auth_id
    );
    const posts = await userresponse.json();
    var user_id = posts[0].user_id;
    var user_name = posts[0].name;
    setUserName(user_name);
    setUserID(user_id);
    const resID = await fetch(
      process.env.REACT_APP_API_SERVER_URL + "/userprofile/" + user_id
    );
    const user_profile = await resID.json();
    setUserProfile(user_profile[0]);
    setLocation(user_profile[0].location);
    setInstruments(user_profile[0].instruments);
    setExperience(user_profile[0].experience);
    setLiked(user_profile[0].liked_genres);
    setDisliked(user_profile[0].disliked_genres);
    setFee(user_profile[0].fees);
  };
  useEffect(() => {
    loadUserProfile();
  }, []);

  const submitButton = async (e) => {
    e.preventDefault();

    // On submit of the form, send a POST request with the data to the server.
    let data = {
      location: location,
      instruments: instruments,
      experience: experience,
      liked_genres: liked,
      disliked_genres: disliked,
      fees: fees,
    };
    const auth_id = user.sub.split("|")[1];

    const userIDresponse = await fetch(
      `${process.env.REACT_APP_API_SERVER_URL}/users/` + auth_id
    );
    const posts = await userIDresponse.json();
    const user_id = await posts[0].user_id;
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER_URL}/userprofile/${user_id}`,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200 || response.status === 201) {
      alert("Successfully updated User Profile!");
      navigate("/profile");
    } else {
      alert(`Failed to update User Profile, status code = ${response.status}`);
    }
  };

  return (
    <header className="App-header3">
      <div>
        <ResponsiveDrawer></ResponsiveDrawer>
      </div>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            flexGrow: 2,
            p: 3,
            spacing: 2,
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <h1> Update User Profile</h1>
        </Grid>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            flexGrow: 2,
            p: 3,
            spacing: 2,
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Form>
            <Form.Group className="mb-3" controlId="formLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="location"
                onChange={(e) => setLocation(e.target.value)}
                placeholder={location}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formInstruments">
              <Form.Label>Instruments</Form.Label>
              <Form.Control
                type="instruments"
                onChange={(e) => setInstruments(e.target.value)}
                placeholder={instruments}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formExperience">
              <Form.Label>Experience Level</Form.Label>
              <Form.Control
                type="experience"
                onChange={(e) => setExperience(e.target.value)}
                placeholder={experience}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLikedGenres">
              <Form.Label>Liked Genres</Form.Label>
              <Form.Control
                type="liked genres"
                onChange={(e) => setLiked(e.target.value)}
                placeholder={liked}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDislikedGenres">
              <Form.Label>Disliked Genres</Form.Label>
              <Form.Control
                type="disliked genres"
                onChange={(e) => setDisliked(e.target.value)}
                placeholder={disliked}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formFee">
              <Form.Label>Hourly Fee</Form.Label>
              <Form.Control
                type="fee"
                onChange={(e) => setFee(e.target.value)}
                placeholder={fees}
              />
            </Form.Group>

            <Button variant="primary" onClick={submitButton}>
              Submit
            </Button>
          </Form>
        </Grid>
      </Box>
    </header>
  );
}

export default UpdateUserProfile;
