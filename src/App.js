import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import Hotels from "./pages/Hotels/Hotels";
import Teams from "./pages/Teams/Teams";
import Quotes from "./pages/Quotes/Quotes";
import Hotel from "./pages/hotel/Hotel";
import { Register } from "./pages/register/Register";
import { Login } from "./pages/login/Login";
import { AppContext } from "./context/AppContext";
import { Logo } from "./components/Logo/Logo";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Footer from "./components/Footer/Footer";
import PersonCard from "./components/Cards/PersonCard/PersonCard";
// import UserOne from "./pages/AboutUs/User/UserOne";
// MUI - Material UI

export const BASE_URL = "https://api.quotable.io";

function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };

  const { token, setToken } = useContext(AppContext);
  useEffect(() => {
    const localToken = localStorage.getItem("token");
    setToken(localToken);
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ minHeight: "75vh" }}>
        <Routes>
          <Route path="/" element={token ? <Logo /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/about-us"
            element={
              <ProtectedRoute>
                <AboutUs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/aboutus:email"
            element={
              <ProtectedRoute>
                <PersonCard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/hotels"
            element={
              <ProtectedRoute>
                <Hotels />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teams"
            element={
              <ProtectedRoute>
                <Teams />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quotes"
            element={
              <ProtectedRoute>
                <Quotes />
              </ProtectedRoute>
            }
          />
          <Route
            path="/hotels/:id"
            element={
              <ProtectedRoute>
                <Hotel />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
