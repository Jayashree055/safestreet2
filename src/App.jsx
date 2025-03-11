


// import { useState } from "react";
// import "./App.css";
// import Header from "./assets/header";
// import Sidebar from "./assets/sidebar";
// import Home from "./assets/home";
// import DamageReports from "./assets/damage_reports";
// import Welcome from "./assets/welcome";
// import Login from "./assets/login";
// // import Register from "./assets/register";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// function App() {
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   };

//   return (
//     <Router>
//       <div className="grid-container">
//         <Header openSidebar={OpenSidebar} />
//         <Sidebar openSidebarToggle={openSidebarToggle} />
//         <Login/>
//         <main className="main-content">
//           <Routes>
//             <Route path="/" element={<Home/>}/>
//             <Route path="/damage-reports" element={<DamageReports />} />
//             <Route path="/login" element={<DamageReports />} />
//             <Route path="/register" element={<DamageReports />} />
//           </Routes>
//         </main> 
//       </div>
      
//     </Router>
//    );
// }

// export default App;



import { useState } from "react";
import "./App.css";
import Header from "./assets/header";
import Sidebar from "./assets/sidebar";
import Home from "./assets/home";
import Damage_Reports from "./assets/damage_reports";
import Welcome from "./assets/welcome";
import Login from "./assets/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <Router>
      <div className="grid-container">
        <Header openSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} />
        <main className="main-content">
        
          <Routes>
            
        
            <Route path="/" element={<Home />} />
           
            <Route path="/damage_reports" element={<Damage_Reports />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;