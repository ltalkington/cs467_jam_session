import ResponsiveDrawer from "../../../../Components/Application/Sidebar/Sidebar.js";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function CreateMessages() {
  const { user } = useAuth0();

  const [body, setBody] = useState("Who wants to play? ");
  const [receiver, setReceiver] = useState("Who to send it to?");

  const navigate = useNavigate();

  const submitButton = async (e) => {
    e.preventDefault();
    if (body === undefined) {
      alert("invalid entry in body");
    } else {
      // On submit of the form, send a POST request with the data to the server.
      const auth_id = user.sub.split("|")[1];
      const userresponse = await fetch(
        "http://localhost:8000/users/" + auth_id
      );
      const posts = await userresponse.json();
      const userID = await posts[0].user_id;
      let data = {
        senderID: 1,
        receiverID: receiver,
        content: body,
      };

      const response = await fetch("http://localhost:8000/message/new", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200 || response.status === 201) {
        alert("Successfully sent message!");
        navigate("/messages");
      } else {
        alert(`Failed to send message, status code = ${response.status}`);
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
          <h1> Create New Message</h1>
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
              <Form.Label>Who do you want to send a message to?</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setReceiver(e.target.value)}
                placeholder={receiver}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>What do you want to say?</Form.Label>
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

export default CreateMessages;
