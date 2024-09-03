import React from "react";
import AppButton from "../AppButton";
import AppInputField from "../AppInputField";
import "./style.scss";
import AppCheckbox from "../AppCheckbox";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (name, value) => setState({ ...state, [name]: value });
  const handleLogin = () => navigate("/");

  return (
    <div className="login-page">
      <h1 className="heading">Sign in</h1>
      <AppInputField
        placeholder="Email"
        type="email"
        name="email"
        value={state.email}
        onChange={handleChange}
      />
      <AppInputField
        placeholder="password"
        name="password"
        type="password"
        value={state.password}
        onChange={handleChange}
      />
      <AppCheckbox
        label="remember me"
        name="rememberMe"
        checked={state.rememberMe}
        onChange={handleChange}
      />
      <AppButton text="Login" onClick={handleLogin} />
    </div>
  );
};

export default LoginScreen;
