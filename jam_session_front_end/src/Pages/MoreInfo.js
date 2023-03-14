import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function MoreInfo() {
  const { user } = useAuth0();

  const Checker = async () => {
    const auth_id = user.sub.split("|")[1];

    if (auth_id) {
      const userIDresponse = await fetch(
        `${process.env.REACT_APP_API_SERVER_URL}/users/` + auth_id
      );
      const posts = await userIDresponse.json();
      const userID = await posts[0].user_id;
      if (userID) {
        navigate("/timeline");
      }
    }
  };
  Checker();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [location, setLocation] = useState();
  const [instruments, setInstruments] = useState();
  const [experience, setExperience] = useState();
  const [liked, setLiked] = useState();
  const [disliked, setDisliked] = useState();
  const [portfolio, setPortfolio] = useState();
  const [fee, setFee] = useState();
  const [availability, setAvailability] = useState();
  const navigate = useNavigate();

  const submitButton = async (e) => {
    e.preventDefault();
    const auth_id = user.sub.split("|")[1];

    // On submit of the form, send a POST request with the data to the server.
    let userdata = {
      name: name,
      email_address: email,
      auth_id: auth_id,
    };

    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER_URL}/users`,
      {
        method: "POST",
        body: JSON.stringify(userdata),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200 || response.status === 201) {
      alert("Successfully created User data!");
      //navigate("/profile");
    } else {
      alert(`Failed to create User data, status code = ${response.status}`);
    }
    const userIDresponse = await fetch(
      `${process.env.REACT_APP_API_SERVER_URL}/users/` + auth_id
    );
    const posts = await userIDresponse.json();
    const userID = await posts[0].user_id;
    let data = {
      location: location,
      instruments: instruments,
      experience: experience,
      liked_genres: liked,
      disliked_genres: disliked,
      portfolio_link: portfolio,
      fees: fee,
      availability: availability,
      user_id: userID,
    };
    const userresponse = await fetch(
      `${process.env.REACT_APP_API_SERVER_URL}/userprofile`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (userresponse.status === 200 || userresponse.status === 201) {
      alert("Successfully created User Profile data!");
      navigate("/profile");
    } else {
      alert(
        `Failed to create User Profile data, status code = ${userresponse.status}`
      );
    }
  };

  return (
    <header className="App-header">
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
          <h1> Let's learn more about you! </h1>
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
            <Form.Group className="mb-3" controlId="profileName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                onChange={(e) => setName(e.target.value)}
                placeholder={name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhotoLink">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="photo"
                onChange={(e) => setEmail(e.target.value)}
                placeholder={email}
              />
            </Form.Group>
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
                placeholder={10}
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

export default MoreInfo;
