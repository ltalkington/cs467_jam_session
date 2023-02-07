import Button from "react-bootstrap/Button";

function NotFound() {
  return (
    <div id="center-error-div">
      <h1 id="error-text">
        {" "}
        <span className="text-color-primary">404</span> Not Found{" "}
      </h1>
      <Button
        tag="a"
        color="primary"
        id="landing-button-left"
        wideMobile
        href="/"
      >
        Home Page
      </Button>
      <Button
        tag="a"
        color="primary"
        id="landing-button-right"
        wideMobile
        href="/timeline"
      >
        Back To App
      </Button>
    </div>
  );
}

export default NotFound;
