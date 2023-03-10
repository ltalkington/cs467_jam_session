import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import concert1 from "../../../Assets/concert1.jpg";
import CardGroup from "react-bootstrap/CardGroup";
import Avatar from "@mui/material/Avatar";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function OwnTextPosts({ postInfo, loadTextPosts }) {
  const { user } = useAuth0();
  const navigate = useNavigate();
  const [userName, setUserName] = useState();

  const loadUserID = async () => {
    const auth_id = user.sub.split("|")[1];
    const userresponse = await fetch(process.env.REACT_APP_API_SERVER_URL + "/users/" + auth_id);
    const posts = await userresponse.json();
    setUserName(posts[0].name);
  };
  useEffect(() => {
    loadUserID();
  }, []);

  const deleteButton = async (e) => {
    // On submit of the form, send a DELETE request with the ID to the server.
    let data = {
      Text_Post_id: postInfo.Text_Post_id,
    };

    const response = await fetch(
      process.env.REACT_APP_API_SERVER_URL + "/textpost/" + postInfo.Text_Post_id + "/delete",
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
      loadTextPosts();
    } else {
      alert(`Failed to delete the Post, status code = ${response.status}`);
      loadTextPosts();
    }
  };

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
            Last updated {postInfo.post_date}
          </small>
          <span className="text-right">
            {" "}
            <Button
              size="small"
              onClick={() => {
                navigate("/updatetextpost", {
                  state: {
                    id: postInfo.Text_Post_id,
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
          </span>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default OwnTextPosts;
