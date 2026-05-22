import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import TermsService from "./pages/TermsService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ProtectedRoute from "./routes/ProtectedRoute";
import GuestRoute from "./routes/GuestRoute";
import Passport from "./pages/Passport";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />} />
        <Route
          path="/globe"
          element={<ProtectedRoute><Passport /></ProtectedRoute>} />
        <Route
          path="/login"
          element={<GuestRoute><Login /></GuestRoute>} />
        <Route
          path="/registration"
          element={<GuestRoute><Registration /></GuestRoute>} />
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