import ResponsiveDrawer from "../../../../Components/Application/Sidebar/Sidebar.js";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function CreateTextPost() {
  const { user } = useAuth0();

  const [body, setBody] = useState("Who wants to play? ");
  const navigate = useNavigate();

  const submitButton = async (e) => {
    e.preventDefault();

    if (body === undefined) {
      alert("invalid entry in body for the users");
    } else {
      // On submit of the form, send a POST request with the data to the server.
      const auth_id = user.sub.split("|")[1];
      const userresponse = await fetch(
        process.env.REACT_APP_API_SERVER_URL + "/users/" + auth_id
      );
      const posts = await userresponse.json();
      const userID = await posts[0].user_id;
      let data = {
        user_id: userID,
        post_body: body,
        post_likes: 0,
      };

      const response = await fetch(process.env.REACT_APP_API_SERVER_URL + "/textpost/new", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200 || response.status === 201) {
        alert("Successfully added the Text Post!");
        navigate("/timeline");
      } else {
        alert(`Failed to add Text Post, status code = ${response.status}`);
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
          <h1> Create Text Post</h1>
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
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>What's on your mind?</Form.Label>
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

export default CreateTextPost;
