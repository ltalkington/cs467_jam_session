import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Button from "react-bootstrap/Button";

const SignupButton = ({text}) => {
    const { loginWithRedirect } = useAuth0();

    const handleSignUp = async () => {
        await loginWithRedirect({
            appState: {
                returnTo: "/timeline",
            },
            authorizationParams: {
                screen_hint: "signup",
            },
        });
    };

    return (
        <Button className="button_sign-up" onClick={handleSignUp}>
            {text}
        </Button>
    );
};

export default SignupButton