import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function CollapsibleExample() {
  const handlePricingClickScroll = () => {
    const element = document.getElementById("pricing");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleFeaturesClickScroll = () => {
    const element = document.getElementById("features");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Navbar collapseOnSelect expand="lg" id="navbar-landing">
      <Container>
        <Navbar.Brand class="nav-text" href="#home">
          Jam Session
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={handleFeaturesClickScroll}>Features</Nav.Link>
            <Nav.Link onClick={handlePricingClickScroll}>Demo</Nav.Link>
          </Nav>
          <Nav>
            <Button id="sign-in-button" variant="">
              Login{" "}
            </Button>
            <br></br>
            <Button id="register-button" variant="outline-success">
              Register
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
