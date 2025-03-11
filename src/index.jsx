import React from "react";
import ReactDOM from "react-dom";
import Login from "./src/assets/Login";  // ✅ Import only Login.jsx for testing
import "./App.css";  // ✅ Ensure styles are applied

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Login />  {/* ✅ This will only render the Login Page */}
  </React.StrictMode>
);
