import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import concert1 from "../../../Assets/concert1.jpg";
import CardGroup from "react-bootstrap/CardGroup";

export default function JamSessions() {
  return (
    <CardGroup>
      <Card sx={{ maxWidth: 345, marginLeft: 5, marginBottom: 5 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={concert1}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Looking for a Lead Singer
          </Typography>
          <Typography variant="body2" color="text.secondary">
            My band is looking for a lead singer to play some 90's country
            covers
          </Typography>
        </CardContent>
        <CardActions>
          <span className="text-right">
            <Button size="small">Share</Button>
            <Button size="small">Message</Button>
          </span>
        </CardActions>
      </Card>
    </CardGroup>
  );
}
