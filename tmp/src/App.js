import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";

import Logout from "./components/Logout";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import { decodeToken } from "react-jwt";
import { Cookies } from "react-cookie";
import { BsFillPersonFill } from "react-icons/bs";
import "./App.css";
function App() {
  const cookies = new Cookies();
  const [token, setToken] = useState();
  const [show, setShow] = useState(false);
  const ShowPopup = () => setShow(true);
  const ClosePopup = () => setShow(false);
  const access = () => {
    setToken(cookies.get("access"));
  };
  useEffect(() => {
    setToken(cookies.get("access"));
  }, []);
  const decodedToken = decodeToken(token);
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Booking
            </Link>
            <div className="float-right" id="navbarSupportedContent">
              {!decodedToken ? (
                <>
                  <Link to="/login" className="link-primary text-decoration-none m-3">
                    Login
                  </Link>
                  <Link to="/signup" className="btn btn-outline-primary">
                    Signup
                  </Link>
                </>
              ) : (
                <DropdownButton
                  id="dropdown-basic-button"
                  variant="white"
                  title={<BsFillPersonFill />}
                >
                  <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                  <Dropdown.Item onClick={ShowPopup}>Logout</Dropdown.Item>
                </DropdownButton>
              )}
            </div>
          </div>
        </nav>

        <Routes>
          <Route
            exact
            path="/"
            element={!decodedToken ? <Home /> : <Dashboard />}
          ></Route>
          <Route
            exact
            path="/login"
            element={<Login access={access} />}
          ></Route>
          <Route
            exact
            path="/signup"
            element={<Signup access={access} />}
          ></Route>
          {decodedToken && (
            <Route exact path="/profile" element={<Profile />}></Route>
          )}
        </Routes>
        <Logout show={show} ClosePopup={ClosePopup} access={access} />
      </div>
    </Router>
  );
}

export default App;
