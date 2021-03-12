import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import "./Login.css";
import { Context } from "../API/Context";
import PersonIcon from "@material-ui/icons/Person";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { csrftoken } from "../API/CSRFToken";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const value = useContext(Context);
  const [error, setError] = useState();

  async function submitHandle(e) {
    e.preventDefault();

    const response = await fetch(`http://127.0.0.1:8000/api/admin-login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (response.ok) {
      value.setLoggedIn(true);
      localStorage.setItem("loggedIn", true);
    } else {
      value.setLoggedIn(false);
      setError(data.message);
    }
  }

  useEffect(() => {
    setError("");
  }, [username, password]);

  if (value.loggedIn) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="Login">
      <form className="login-form shadow-lg" onSubmit={submitHandle}>
        <legend>Login</legend>
        <span className="Login__error">{error}</span>
        <div className="input-group mb-2">
          <span className="input-group-text">
            <PersonIcon />
          </span>
          <input
            type="text"
            placeholder="USERNAME"
            className="form-control"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            required
          />
        </div>
        <div className="input-group mb-2">
          <span className="input-group-text">
            <VpnKeyIcon />
          </span>
          <input
            type="password"
            placeholder="PASSWORD"
            className="form-control"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </div>
        <input type="submit" value="SUBMIT" className="btn btn-primary w-50" />
      </form>
    </div>
  );
}
export default Login;

export function Logout() {
  const value = useContext(Context);

  useEffect(() => {
    value.setLoggedIn(false);
    localStorage.removeItem("loggedIn");
    fetch(`http://127.0.0.1:8000/api/admin-login/`);
  });

  return <Redirect to="/" />;
}
