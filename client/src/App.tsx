import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TermsService from "./pages/TermsService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Globe from "./pages/Globe";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />} />
        <Route
          path="/globe"
          element={<Globe />} />
        <Route
          path="/terms"
          element={<TermsService />} />
        <Route
          path="/privacy"
          element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}