import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import concert1 from "../../../Assets/concert1.jpg";
import CardGroup from "react-bootstrap/CardGroup";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";

function Message({ postInfo }) {
  const { user } = useAuth0();
  const [userName, setUserName] = useState();

  const loadUserID = async () => {
    const userresponse = await fetch(
      "http://localhost:8000/users/" + postInfo.senderID + "/user_id/"
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
        <Card.Header as="h5">{userName}</Card.Header>

        <Card.Body style={{ width: 1000 }}>
          <Avatar alt="MR" src="/static/images/avatar/1.jpg" />

          <Card.Text style={{ fontSize: 20 }}> {postInfo.content} </Card.Text>
        </Card.Body>
        <Card.Footer style={{ fontSize: 15 }}>
          <small className="text-muted">{postInfo.created_at}</small>
          <span className="text-right">
            <Button variant="contained">Reply</Button>
          </span>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Message;
