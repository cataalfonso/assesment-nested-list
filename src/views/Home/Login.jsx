import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import { useAuthLoginMutation } from "../../redux/api/auth";
import { setToken } from "../../redux/slices/userSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login] = useAuthLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswInput = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ email, password })
      .unwrap()
      .then((credentials) => {
        dispatch(setToken(credentials.access_token))
        navigate('/list')
      })
      .catch((error)=>alert(`Error al ingresar ${error.status}: ${error.data.message}`));
  };


  return (
    <div className="container">
      <form id="form-login" onSubmit={handleSubmit} className="form container">
      <h1>Login</h1>
        <label>
          <input
            name="txtEmail"
            type="email"
            className="form-input"
            placeholder="email"
            required
            value={email}
            onChange={handleEmailInput}
          />
        </label>
        <label>
          <input
            name="txtPassword"
            type="password"
            className="form-input"
            placeholder="password"
            required
            value={password}
            onChange={handlePasswInput}
          />
        </label>
        <button id="btnSend" className="form-button btn info">Login</button>
      </form>
    </div>
  );
}

export default Login;
