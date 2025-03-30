import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

const Admin = () => {
    return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    );
  };
  
  export default Admin;