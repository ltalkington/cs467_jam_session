import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import concert1 from "../../../Assets/concert1.jpg";
import CardGroup from "react-bootstrap/CardGroup";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

function Message() {
  return (
    <CardGroup id="override-app">
      <Card className="text-post-card" style={{ marginLeft: 100 }}>
        <Card.Header as="h5">Mike Random</Card.Header>

        <Card.Body style={{ width: 1000 }}>
          <Avatar alt="MR" src="/static/images/avatar/1.jpg" />

          <Card.Text style={{ fontSize: 20 }}>
            {" "}
            Had a great time at the jazz meetup, do you want to join my band?
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ fontSize: 15 }}>
          <small className="text-muted">Last updated 3 mins ago</small>
          <span className="text-right">
            <Button variant="contained">Reply</Button>
          </span>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Message;