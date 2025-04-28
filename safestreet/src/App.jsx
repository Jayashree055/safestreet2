// import { useState, useEffect } from "react";
// import "./App.css";
// import Header from "./assets/header";
// import Sidebar from "./assets/sidebar";
// import Home from "./assets/home";
// import Damage_Reports from "./assets/damage_reports";
// import Welcome from "./assets/welcome";
// import Login from "./assets/login";
// import ForgotPassword from "./assets/forgotpassword";
// import Register from "./assets/register";
// import Contact from "./assets/contact";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const toggleSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <Router>
//       <div className="grid-container">
//         <Header openSidebar={toggleSidebar} />

//         {isMobile && (
//           <button className="hamburger-button" onClick={toggleSidebar}>
//             <div className="bar"></div>
//             <div className="bar"></div>
//             <div className="bar"></div>
//           </button>
//         )}

//         <Sidebar openSidebarToggle={openSidebarToggle} toggleSidebar={toggleSidebar} />

//         <main className="main-content">
//           <Routes>
//             <Route path="/" element={<Welcome />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/damage_reports" element={<Damage_Reports />} />
//             <Route path="/forgotpassword" element={<ForgotPassword />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./assets/header";
import Sidebar from "./assets/sidebar";
import Home from "./assets/home";
import Damage_Reports from "./assets/damage_reports";
import Welcome from "./assets/welcome";
import Login from "./assets/login";
import ForgotPassword from "./assets/forgotpassword";
import Register from "./assets/register";
import Contact from "./assets/contact";
import EmailHistory from "./assets/EmailHistory";
import Otp from "./assets/otp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [user, setUser] = useState(null); // Store user info

  const toggleSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (!email) return;

    fetch("/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Failed to fetch user", err));
  }, []);

  

  return (
    <Router>
      <div className="grid-container">
        {/* Pass user.name as prop to Header */}
        <Header openSidebar={toggleSidebar} userName={user?.name} />

        {isMobile && (
          <button className="hamburger-button" onClick={toggleSidebar}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
        )}

        <Sidebar openSidebarToggle={openSidebarToggle} toggleSidebar={toggleSidebar} />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/damage_reports" element={<Damage_Reports />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/EmailHistory" element={<EmailHistory />} />
            <Route path="/otp" element={<Otp />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

