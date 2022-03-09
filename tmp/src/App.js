import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Logout from "./components/Logout";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import { decodeToken } from "react-jwt";
import { Cookies } from "react-cookie";
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
  },[]);
  const decodedToken = decodeToken(token);
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Booking
            </Link>
            <div className="float-right" id="navbarSupportedContent">
              {!decodedToken ? (
                <>
                  <Link to="/login">
                    <button className="btn btn-outline-primary m-3">
                      Login
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button className="btn btn-outline-primary">Signup</button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/profile">
                    <button className="btn btn-outline-primary m-3">
                      Profile
                    </button>
                  </Link>
                  <button
                    className="btn btn-outline-danger m-3"
                    onClick={ShowPopup}
                  >
                    Logout
                  </button>
                </>
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
