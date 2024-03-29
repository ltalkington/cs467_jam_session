import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";

const LogoutButton = ({ text }) => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: "https://www.jamsessionstudio.net/",
      },
    });
  };

  return (
    <Button
      onClick={handleLogout}
      tag="a"
      color="primary"
      className="button_logout"
      wideMobile
    >
      {text}
    </Button>
  );
};

export default LogoutButton;
