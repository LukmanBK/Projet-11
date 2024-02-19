import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/argentBankLogo.webp";
import { logoutUser } from "../../actions/user.actions";
import { fetchUserProfile } from "../../actions/user.actions";
import "./navbar.css";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const userProfile = useSelector((state) => state.user.userProfile);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    navigate("/");
  };

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  if (token) {
    return (
      <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo">
          <img
            src={logo}
            alt="Argent Bank Logo"
            className="main-nav-logo-image"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div className="navbar_loginSuccess">
          <NavLink to="/profile" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {userProfile.firstName}
          </NavLink>
          <NavLink to="/" className="main-nav-item" onClick={handleSignOut}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </NavLink>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo">
          <img
            src={logo}
            alt="Argent Bank Logo"
            className="main-nav-logo-image"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          <NavLink to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        </div>
      </nav>
    );
  }
};

export default Navbar;
