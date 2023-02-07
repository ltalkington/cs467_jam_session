import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  function login() {
    navigate("/timeline");
  }
  return (
    <div>
      <button onClick={login}> Login </button>
    </div>
  );
}

export default Login;
