import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import concert1 from "../../../Assets/concert1.jpg";
import CardGroup from "react-bootstrap/CardGroup";
import Avatar from "@mui/material/Avatar";
import { useState, useEffect } from "react";

function TextPosts({ postInfo }) {
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
    <CardGroup id="override-app">
      <Card className="text-post-card" style={{ marginLeft: 100 }}>
        <Card.Header as="h5">{userName} </Card.Header>

        <Card.Body style={{ width: 1000 }}>
          <Avatar alt="JS" src="/static/images/avatar/1.jpg" />

          <Card.Text style={{ fontSize: 20 }}> {postInfo.post_body}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ fontSize: 15 }}>
          <small className="text-muted">
            Last updated {postInfo.post_dateå}
          </small>
          <span className="text-right">
            {" "}
            <small className="text-bold"> {postInfo.post_likes} Rocks</small>
            <small className="text-bold "> 0 Comments</small>{" "}
          </span>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default TextPosts;
