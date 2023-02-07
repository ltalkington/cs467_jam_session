import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import concert1 from "../../../Assets/concert1.jpg";
import CardGroup from "react-bootstrap/CardGroup";
import Avatar from "@mui/material/Avatar";

function TextPosts() {
  return (
    <CardGroup id="override-app">
      <Card className="text-post-card" style={{ marginLeft: 100 }}>
        <Card.Header as="h5">Jason Random</Card.Header>

        <Card.Body style={{ width: 1000 }}>
          <Avatar alt="JR" src="/static/images/avatar/1.jpg" />

          <Card.Text style={{ fontSize: 20 }}>
            {" "}
            Had a great time at the piano bar, who wants to jam to some blues?
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ fontSize: 15 }}>
          <small className="text-muted">Last updated 3 mins ago</small>
          <span className="text-right">
            {" "}
            <small className="text-bold"> 100 Rocks</small>
            <small className="text-bold "> 5 Comments</small>{" "}
          </span>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default TextPosts;
