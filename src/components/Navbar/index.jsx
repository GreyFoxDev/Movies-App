import { useNavigate } from "react-router-dom";
import AppButton from "../AppButton";
import logoutIcon from "/logout.svg";
import PlusIcon from "/plus-circle.svg";

import "./style.scss";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => navigate("/login");
  const addMovie = () => navigate("/movie/add");

  return (
    <div className="auth-navbar">
      <div className="logo">
        <h2 className="heading">My movies</h2>
        <AppButton onlyIcon={true} icon={PlusIcon} onClick={addMovie} />
      </div>
      <AppButton text="logout" icon={logoutIcon} onClick={logout} />
    </div>
  );
};

export default Navbar;
