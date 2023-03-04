import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LoginButton from "../../Components/Authenticate/LoginButton";
import SignupButton from "../Authenticate/SignupButton";
import LogoutButton from "../Authenticate/LogoutButton";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const travel = () => {
    navigate("/timeline");
  };
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
  const { isAuthenticated } = useAuth0();

  return (
    <Navbar collapseOnSelect expand="lg" id="navbar-landing">
      <Container>
        <Navbar.Brand class="nav-text" href="/">
          Jam Session
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={handleFeaturesClickScroll}>Features</Nav.Link>
            <Nav.Link onClick={handlePricingClickScroll}>Demo</Nav.Link>
          </Nav>
          {!isAuthenticated && (
            <Nav>
              <LoginButton text="Log In" />
              <br />
              <SignupButton
                id="register-button"
                text="Register"
                variant="outline-success"
              />
            </Nav>
          )}
          {isAuthenticated && (
            <Nav>
              <Button id="landing-button-left" onClick={travel}>
                {" "}
                Go To App
              </Button>
              <LogoutButton text="Log Out" />
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
