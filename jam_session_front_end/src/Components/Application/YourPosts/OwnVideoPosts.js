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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import concert1 from "../../../Assets/concert1.jpg";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useAuth0 } from "@auth0/auth0-react";
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

export default function VideoPost({ postInfo, loadVideoPosts }) {
  const { user } = useAuth0();
  const navigate = useNavigate();
  const [user_id, setUserID] = useState();
  const [userName, setUserName] = useState();

  const loadUserID = async () => {
    const auth_id = user.sub.split("|")[1];
    const userresponse = await fetch(
      process.env.REACT_APP_API_SERVER_URL + "/users/" + auth_id
    );
    const posts = await userresponse.json();
    setUserName(posts[0].name);
  };
  useEffect(() => {
    loadUserID();
  }, []);

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const deleteButton = async (e) => {
    // On submit of the form, send a DELETE request with the ID to the server.
    let data = {
      Text_Post_id: postInfo.Video_Post_id,
    };

    const response = await fetch(
      process.env.REACT_APP_API_SERVER_URL +
        "/videopost/" +
        postInfo.Video_Post_id +
        "/delete",
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
      loadVideoPosts();
    } else {
      alert(`Failed to delete the Post, status code = ${response.status}`);
      loadVideoPosts();
    }
  };

  return (
    <Card sx={{ maxWidth: 345, marginLeft: 5, marginBottom: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="video">
            LT
          </Avatar>
        }
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
        <Button
          size="small"
          onClick={() => {
            navigate("/updatevideopost", {
              state: {
                id: postInfo.Video_Post_id,
                body: postInfo.post_body,
                post_date: postInfo.post_date,
                user_id: postInfo.user_id,
                post_likes: postInfo.post_likes,
              },
            });
          }}
        >
          Update
        </Button>
        <Button
          size="small"
          onClick={() => {
            deleteButton(postInfo);
          }}
        >
          Delete
        </Button>
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
