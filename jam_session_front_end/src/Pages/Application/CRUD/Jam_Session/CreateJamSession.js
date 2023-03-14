import ResponsiveDrawer from "../../../../Components/Application/Sidebar/Sidebar.js";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

function CreateJamSession() {
  const { user } = useAuth0();
  const [gigDate, setGigDate] = useState();
  const [jamCity, setJamCity] = useState("Saint Louis");
  const [jamState, setJamState] = useState("Missouri");
  const [genre, setGenre] = useState("Rock");
  const [instrumentsNeeded, setInstrumentsNeeded] = useState("Guitar");
  const [experienceNeeded, setExperienceNeeded] = useState("Advanced");
  const [feeOffered, setFeeOffered] = useState("300");
  const [title, setTitle] = useState("Jam Session Wanted");
  const [body, setBody] = useState("Who wants to play? ");
  const navigate = useNavigate();

  const submitButton = async (e) => {
    e.preventDefault();
    if (
      gigDate === undefined ||
      jamCity === undefined ||
      genre === undefined ||
      instrumentsNeeded === undefined
    ) {
      alert("invalid entry");
      if (gigDate === undefined) {
        alert("invalid entry in gigDate");
      }
      if (jamCity === undefined) {
        alert("invalid entry in City");
      }
      if (genre === undefined) {
        alert("invalid entry in genre");
      }
      if (instrumentsNeeded === undefined) {
        alert("invalid entry in instrumentsNeeded");
      }
    } else {
      // On submit of the form, send a POST request with the data to the server.
      const auth_id = user.sub.split("|")[1];
      const userresponse = await fetch(
        process.env.REACT_APP_API_SERVER_URL + "/users/" + auth_id
      );
      const posts = await userresponse.json();
      const userID = await posts[0].user_id;
      let data = {
        userId: userID,
        gigDate: gigDate,
        jam_city: jamCity,
        jam_state: jamState,
        genre: genre,
        instrumentsNeeded: instrumentsNeeded,
        experienceNeeded: experienceNeeded,
        fee: feeOffered,
        title: title,
        body: body,
      };

      console.log(userID);

      const response = await fetch(process.env.REACT_APP_API_SERVER_URL + "/jamsession/new", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200 || response.status === 201) {
        alert("Successfully added the Jam Session!");
        navigate("/jamsessions");
      } else {
        alert(`Failed to add Jam Session, status code = ${response.status}`);
      }
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
          <h1> Create Jam Session</h1>
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
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Gig Date</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setGigDate(e.target.value)}
                placeholder={gigDate}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Jam City</Form.Label>
              <Form.Control
                type="city"
                onChange={(e) => setJamCity(e.target.value)}
                placeholder={jamCity}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Jam State</Form.Label>
              <Form.Control
                type="state"
                onChange={(e) => setJamState(e.target.value)}
                placeholder={jamState}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Genre</Form.Label>
              <Form.Control
                type="genre"
                onChange={(e) => setGenre(e.target.value)}
                placeholder={genre}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Instruments Needed</Form.Label>
              <Form.Control
                type="instruments"
                onChange={(e) => setInstrumentsNeeded(e.target.value)}
                placeholder={instrumentsNeeded}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Experience Level Needed</Form.Label>
              <Form.Control
                type="experience"
                onChange={(e) => setExperienceNeeded(e.target.value)}
                placeholder={experienceNeeded}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Fee Offered</Form.Label>
              <Form.Control
                type="fee"
                onChange={(e) => setFeeOffered(e.target.value)}
                placeholder={feeOffered}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Jam Session Title</Form.Label>
              <Form.Control
                type="title"
                onChange={(e) => setTitle(e.target.value)}
                placeholder={title}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Jam Session Body</Form.Label>
              <Form.Control
                type="body"
                onChange={(e) => setBody(e.target.value)}
                placeholder={body}
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

export default CreateJamSession;
