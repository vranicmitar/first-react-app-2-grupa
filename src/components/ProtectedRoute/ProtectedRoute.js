import React from "react";
import "./ProtectedRoute.css";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  if (token) {
    return <>{children}</>;
  } else {
    return alert("Morate se ulogovati da biste gledali stranicu...");
  }
}
