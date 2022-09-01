import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { Button } from "react-bootstrap";
import FoodNutrients from "./components/FoodNutrients/index";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function getAccessToken() {
  const url = window.location.href;
  const hash = url.substring(url.indexOf('#') + 1);
  let result = hash.split('&')
  result = result[0].split('=')
  // localStorage.setItem()
  localStorage.setItem("idToken", result)
}

function goUrl() {
  window.location.href = "https://lettuceeathealthy.auth.ap-southeast-2.amazoncognito.com/login?client_id=2attb3i0qso7nlgqj7v2nm583k&response_type=code&scope=openid+profile&redirect_uri=https://www.lettuceeathealthy.ml"
}

function App() {

  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    localStorage.getItem("idToken") != null ? <div>
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            {/*<Route path="/project" element={<Projects />} />*/}
            <Route path="/About" element={<About />} />
            {/*<Route path="/foodnutrients" element={<FoodNutrients />} />*/}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </Router>

    </div> : <div className="login">
      <Button onClick={(event) => { goUrl(); getAccessToken() }} type ="button" >
        Login
      </Button>
    </div>
  );
}
export default App;
