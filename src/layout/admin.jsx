import {  HashRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import BlankPage from "../pages/BlankPage";

const Admin = () => {
  return (
      <Routes>
        <Route path="/portfolio" element={<LandingPage />} />
        <Route path="/portfolio/blank-page" element={<BlankPage />} />
      </Routes>
  );
};

export default Admin;
