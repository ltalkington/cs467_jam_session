import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import concert1 from "../../../Assets/concert1.jpg";
import { useState, useEffect } from "react";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function VideoPost({ postInfo }) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [userName, setUserName] = useState();

  const loadUserID = async () => {
    const userresponse = await fetch(
      process.env.REACT_APP_API_SERVER_URL + "/users/" + postInfo.user_id + "/user_id/"
    );
    const posts = await userresponse.json();
    setUserName(posts[0].name);
  };
  useEffect(() => {
    loadUserID();
  }, []);

  return (
    <Card sx={{ maxWidth: 345, marginLeft: 5, marginBottom: 5 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="video"></Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={userName}
        subheader={"Jam Session #" + postInfo.Video_Post_id}
      />
      <CardMedia
        component="img"
        height="194"
        image={concert1}
        alt="Video Rock"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {postInfo.post_body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Rock">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Comments:</Typography>
          <Typography paragraph>This is cool!</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
