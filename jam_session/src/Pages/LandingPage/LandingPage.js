import NavBar from "../../Components/NavBar/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import concert1 from "../../Assets/concert1.jpg";
import concert2 from "../../Assets/concert2.jpg";
import guitar1 from "../../Assets/guitar1.jpg";
import guitarbeach from "../../Assets/guitarbeach.jpg";

import Button from "react-bootstrap/Button";
import { GiGuitarBassHead } from "react-icons/gi";
import Divider from "@mui/material/Divider";
import Footer from "../../Components/Landing/Footer.js";

function LandingPage() {
  return (
    <>
      <NavBar></NavBar>
      <div>
        <Container>
          <Row className="align-items-center">
            <Col className="center-col">
              <h1>
                {" "}
                Welcome to <br></br>
                <span className="text-color-primary">Jam Sessions</span>
              </h1>
              <p>
                Be where you are meant to be and jam with who you are meant to
                jam with!
              </p>

              <Button
                tag="a"
                color="primary"
                id="landing-button-left"
                wideMobile
                href="#"
              >
                Sign Up
              </Button>
              <Button
                tag="a"
                color="primary"
                id="landing-button-right"
                wideMobile
                href="#"
              >
                Learn More
              </Button>
            </Col>
            <Col>
              <img
                src={concert1}
                alt="Login image"
                className="w-100 rounded"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </Col>
          </Row>
          <br></br>
          <Divider sx={{ bgcolor: "white" }}></Divider>

          <br></br>
          <Row className="align-items-center" id="features">
            <h1> Features </h1> <br></br> <br></br>
            <br></br>
          </Row>
          <Row>
            <Col>
              <GiGuitarBassHead size="50px"> </GiGuitarBassHead>
              <h1> Jam with anyone</h1>
              <p>
                {" "}
                Meet others that are ready to jam at a moments notice and figure
                out what your style will be.{" "}
              </p>
            </Col>
            <Col>
              {" "}
              <GiGuitarBassHead size="50px"></GiGuitarBassHead>
              <h1> Profile Reviews</h1>
              <p>
                {" "}
                Your profile can handle reviews so others can see what you excel
                at, so they know what level of player you are!{" "}
              </p>
            </Col>
            <Col>
              {" "}
              <GiGuitarBassHead size="50px"></GiGuitarBassHead>
              <h1> Post Videos of Jams</h1>
              <p>
                {" "}
                Post a video of your latest Jam Session on our timeline to let
                others see what you can do!
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <GiGuitarBassHead size="50px"></GiGuitarBassHead>
              <h1> All Major Instruments</h1>
              <p>
                {" "}
                If there is an instrument that you are interested in, you can
                tell others that you play that on Jam Session{" "}
              </p>
            </Col>
            <Col>
              {" "}
              <GiGuitarBassHead size="50px"></GiGuitarBassHead>
              <h1> Create Bands</h1>
              <p>
                {" "}
                The best part about playing with others is if you find someone
                who you build true chemistry with. Then you can create a band!{" "}
              </p>
            </Col>
            <Col>
              {" "}
              <GiGuitarBassHead size="50px"></GiGuitarBassHead>
              <h1> Learn Together</h1>
              <p>
                {" "}
                Since this app is for Jam Sessions, it will allow you to learn
                from what others do.
              </p>
            </Col>
          </Row>
          <br></br>
          <Divider sx={{ bgcolor: "white" }}></Divider>
          <br></br>
          <br></br>
          <Row className="align-items-center">
            <Col xs={12} md={8} className="center-col">
              <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Create Great Music with Others
              </div>
              <h1>
                {" "}
                Post Jam Sessions <br></br>
              </h1>
              <p>
                Post a video of yourself rocking out to the latest and greatest
                rock song, show off those piano skills, or even show off that
                singing voice!
              </p>
            </Col>
            <Col>
              <img
                src={concert2}
                alt="Login image"
                className="w-100 rounded"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </Col>
          </Row>
          <br></br>
          <Row className="align-items-center">
            <Col xs={12} md={8}>
              <img
                src={guitarbeach}
                alt="Login image"
                className="image-features rounded"
                style={{ objectPosition: "center" }}
              />
            </Col>
            <Col lassName="center-col">
              <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Creative Ways to Jam
              </div>
              <h1>
                {" "}
                Share Whatever You Like <br></br>
              </h1>
              <p>
                Share videos of yourself, texts, find times to meet up with
                other musicians, scroll the Jam Sessions boards, or send
                messages to other musicians.
              </p>
            </Col>
          </Row>
          <br></br>
          <Row className="align-items-center">
            <Col xs={12} md={8} className="center-col">
              <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Competitive Instrument Rankings
              </div>
              <h1>
                {" "}
                Advanced Review System for Instruments<br></br>
              </h1>
              <p>
                Be able to have a review system for all instruments and find out
                your rating amongst your peers! This will allow you to better
                your own skills.
              </p>
            </Col>
            <Col>
              <img
                src={guitar1}
                alt="Login image"
                className="w-100 rounded"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </Col>
          </Row>
          <br></br>
          <Divider sx={{ bgcolor: "white" }}></Divider>
          <br></br>
          <br></br>
          <Footer></Footer>
        </Container>
      </div>
    </>
  );
}

export default LandingPage;
