import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

const Admin = () => {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default Admin;
