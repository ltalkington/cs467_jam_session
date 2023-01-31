import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <Button
                onClick={ () => loginWithRedirect() }
                tag="a"
                color="primary"
                id="landing-button-left"
                wideMobile>
                Log In
            </Button>;
};

export default LoginButton