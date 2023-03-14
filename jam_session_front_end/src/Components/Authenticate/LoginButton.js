import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";

const LoginButton = ({ text }) => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/startupinfo",
      },
    });
  };

  return (
    <Button
      onClick={handleLogin}
      tag="a"
      color="primary"
      className="button_login"
      wideMobile
    >
      {text}
    </Button>
  );
};

export default LoginButton;
