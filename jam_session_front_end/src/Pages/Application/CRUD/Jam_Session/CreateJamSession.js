import ResponsiveDrawer from "../../../../Components/Application/Sidebar/Sidebar.js";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";

function CreateJamSession() {
  const [gigDate, setGigDate] = useState();
  const [location, setLocation] = useState("Saint Louis");
  const [genre, setGenre] = useState("Rock");
  const [instrumentsNeeded, setInstrumentsNeeded] = useState("Guitar");
  const [experienceNeeded, setExperienceNeeded] = useState("Advanced");
  const [feeOffered, setFeeOffered] = useState("300");

  const submitButton = async (e) => {
    e.preventDefault();
    console.log(genre);
    if (
      gigDate === undefined ||
      location === undefined ||
      genre === undefined ||
      instrumentsNeeded === undefined
    ) {
      alert("invalid entry");
      if (gigDate === undefined) {
        alert("invalid entry in gigDate");
      }
      if (location === undefined) {
        alert("invalid entry in location");
      }
      if (genre === undefined) {
        alert("invalid entry in genre");
      }
      if (instrumentsNeeded === undefined) {
        alert("invalid entry in instrumentsNeeded");
      }
    } else {
      // On submit of the form, send a POST request with the data to the server.

      let data = {
        userId: 1,
        gigDate: gigDate,
        location: location,
        genre: genre,
        instrumentsNeeded: instrumentsNeeded,
        experienceNeeded: experienceNeeded,
        fee: feeOffered,
      };

      const response = await fetch("http://localhost:8000/createjamsession", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
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
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="location"
                onChange={(e) => setLocation(e.target.value)}
                placeholder={location}
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
