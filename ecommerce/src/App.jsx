import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import SignUp from "./component/SignUp";
import SignIn from "./component/SignIn";
import Product from "./component/Product";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Product />
    </Router>
  );
}

export default App;
