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
import "./JamSession.css";

export default function JamSessions({ jamSessions, key }) {
  const { user } = useAuth0();
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
              <Button size="small">Share</Button>
              <Button size="small">Message</Button>
              <Button size="medium" className="jam-fee">
                {" "}
                {"$".concat(jamSessions.fee)}
              </Button>
            </Grid>
          </Box>
        </CardActions>
      </Card>
    </CardGroup>
  );
}
