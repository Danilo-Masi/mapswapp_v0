import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Globe from "./pages/Globe";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import TermsService from "./pages/TermsService";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/globe" element={<Globe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/terms" element={<TermsService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}