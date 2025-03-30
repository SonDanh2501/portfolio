import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

const Admin = () => {
    return (
      <Routes>
        <Route path="/landing-page" element={<LandingPage />} />
      </Routes>
    );
  };
  
  export default Admin;