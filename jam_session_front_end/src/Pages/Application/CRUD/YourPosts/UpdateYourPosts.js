import ResponsiveDrawer from "../../../../Components/Application/Sidebar/Sidebar.js";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function UpdateTextPost() {
  const location = useLocation();

  const [body, setBody] = useState("Who wants to play? ");
  const navigate = useNavigate();

  const submitButton = async (e) => {
    e.preventDefault();

    // On submit of the form, send a POST request with the data to the server.
    let data = {
      post_body: body,
      Text_Post_id: location.state.id,
      post_date: location.state.post_date,
      user_id: location.state.user_id,
      post_likes: location.state.post_likes,
    };

    console.log(data);

    const response = await fetch(
      "http://localhost:8000/textpost/" + location.state.id + "/edit",
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200 || response.status === 201) {
      alert("Successfully updated the Post!");
      navigate("/posts");
    } else {
      alert(`Failed to update the Post, status code = ${response.status}`);
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
          <h1> Update Text Post</h1>
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
              <Form.Label>
                What would you like to change on your post?
              </Form.Label>
              <Form.Control
                type="body"
                onChange={(e) => setBody(e.target.value)}
                placeholder={body}
              />
            </Form.Group>
            <Button variant="primary" onClick={submitButton}>
              Update
            </Button>
          </Form>
        </Grid>
      </Box>
    </header>
  );
}

export default UpdateTextPost;
