import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import concert1 from "../../../Assets/concert1.jpg";
import CardGroup from "react-bootstrap/CardGroup";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import { useAuth0 } from "@auth0/auth0-react";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import "./JamSession.css";

export default function OwnJamSessions({ jamSessions, key, loadJamSessions }) {
  const navigate = useNavigate();

  const deleteButton = async (e) => {
    // On submit of the form, send a DELETE request with the ID to the server.
    let data = {
      jam_post_id: jamSessions.jam_post_id,
    };

    const response = await fetch(
      "http://localhost:8000/jamsession/" + jamSessions.jam_post_id + "/delete",
      {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200 || response.status === 201) {
      alert("Successfully deleted the Post!");
      loadJamSessions();
    } else {
      alert(`Failed to delete the Post, status code = ${response.status}`);
      loadJamSessions();
    }
  };
  return (
    <CardGroup>
      <Card
        sx={{
          maxWidth: 300,
          minWidth: 300,
          minHeight: 425,
          maxHeight: 425,
          marginLeft: 5,
          marginBottom: 5,
        }}
      >
        <CardHeader
          title={jamSessions.jam_city.concat(", ", jamSessions.jam_state)}
          subheader={jamSessions.gig_date.split("T")[0]}
        >
          {" "}
        </CardHeader>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={concert1}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {jamSessions.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {jamSessions.body}
          </Typography>
        </CardContent>
        <CardActions
          className="card-bottom"
          sx={{
            width: "100%",
            display: "flex",
            justiyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Grid>
              <Button
                size="small"
                onClick={() => {
                  navigate("/updatejamsession", {
                    state: {
                      id: jamSessions.jam_post_id,
                      date: jamSessions.gig_date,
                      city: jamSessions.jam_city,
                      state: jamSessions.jam_state,
                      genre: jamSessions.genre,
                      instruments: jamSessions.instruments_needed,
                      experience: jamSessions.experience_needed,
                      fee: jamSessions.fee,
                      title: jamSessions.title,
                      body: jamSessions.body,
                    },
                  });
                }}
              >
                Update
              </Button>
              <Button
                size="small"
                onClick={() => {
                  deleteButton(jamSessions);
                }}
              >
                Delete
              </Button>
              <Button size="small">Share</Button>
            </Grid>
          </Box>
        </CardActions>
      </Card>
    </CardGroup>
  );
}
