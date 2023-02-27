import ResponsiveDrawer from "../../../../Components/Application/Sidebar/Sidebar.js";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function UpdateJamSession() {
  const location = useLocation();
  const newDate = location.state.date.split("T")[0];
  const date2 = new Date(newDate);
  const [gigDate, setGigDate] = useState(date2);
  const [city, setCity] = useState(location.state.city);
  const [state, setJamState] = useState(location.state.state);
  const [genre, setGenre] = useState(location.state.genre);
  const [instrumentsNeeded, setInstrumentsNeeded] = useState(
    location.state.instruments
  );
  const [experienceNeeded, setExperienceNeeded] = useState(
    location.state.experience
  );
  const [title, setTitle] = useState(location.state.title);
  const [body, setBody] = useState(location.state.body);
  const [feeOffered, setFeeOffered] = useState(location.state.fee);
  const navigate = useNavigate();

  const submitButton = async (e) => {
    e.preventDefault();

    // On submit of the form, send a POST request with the data to the server.

    let data = {
      gigDate: gigDate,
      city: city,
      state: state,
      genre: genre,
      instrumentsNeeded: instrumentsNeeded,
      experienceNeeded: experienceNeeded,
      fee: feeOffered,
      body: body,
      title: title,
      post_jam_id: location.state.id,
    };

    const response = await fetch("http://localhost:8000/updatejamsession", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200 || response.status === 201) {
      alert("Successfully updated the Jam Session!");
      navigate("/yourjamsessions");
    } else {
      alert(
        `Failed to update the Jam Session, status code = ${response.status}`
      );
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
          <h1> Update Jam Session #{location.state.id}</h1>
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
                placeholder={location.state.date}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="location"
                onChange={(e) => setCity(e.target.value)}
                placeholder={location.state.city}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="location"
                onChange={(e) => setJamState(e.target.value)}
                placeholder={location.state.state}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Genre</Form.Label>
              <Form.Control
                type="genre"
                onChange={(e) => setGenre(e.target.value)}
                placeholder={location.state.genre}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Instruments Needed</Form.Label>
              <Form.Control
                type="instruments"
                onChange={(e) => setInstrumentsNeeded(e.target.value)}
                placeholder={location.state.instruments}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Experience Level Needed</Form.Label>
              <Form.Control
                type="experience"
                onChange={(e) => setExperienceNeeded(e.target.value)}
                placeholder={location.state.experience}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Fee Offered</Form.Label>
              <Form.Control
                type="fee"
                onChange={(e) => setFeeOffered(e.target.value)}
                placeholder={location.state.fee}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                onChange={(e) => setTitle(e.target.value)}
                placeholder={location.state.title}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Body</Form.Label>
              <Form.Control
                type="body"
                onChange={(e) => setBody(e.target.value)}
                placeholder={location.state.body}
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

export default UpdateJamSession;
