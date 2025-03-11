import React, { useState,useEffect } from "react";
import "../App.css";
import "leaflet/dist/leaflet.css"; 
import { MapContainer,TileLayer,Marker,Popup } from "react-leaflet";
import { useLocation } from "react-router-dom";
console.log("DamageReports Component Loaded!");

const Damage_Reports = () => {
  const location=useLocation();
  const queryParams = new URLSearchParams(location.search);
  const filter = queryParams.get("filter");
  const [reports, setReports] = useState([
    { id: 1, location: "Mumbai, Maharashtra", severity: "High", status: "Pending", date: "2025-02-25", lat: 19.0760, lng: 72.8777 },
    { id: 2, location: "Delhi", severity: "Medium", status: "Resolved", date: "2025-02-20", lat: 28.7041, lng: 77.1025 },
    { id: 3, location: "Bangalore, Karnataka", severity: "High", status: "Pending", date: "2025-03-05", lat: 12.9716, lng: 77.5946 },
    { id: 4, location: "Hyderabad, Telangana", severity: "Low", status: "Resolved", date: "2025-03-02", lat: 17.3850, lng: 78.4867 },
    { id: 5, location: "Chennai, Tamil Nadu", severity: "Medium", status: "In Progress", date: "2025-03-10", lat: 13.0827, lng: 80.2707 },
    // Add more reports with lat and lng...
  ]);
  // const [reports, setReports] = useState([
    
  //   { id: 1, location: "Mumbai, Maharashtra", severity: "High", status: "Pending", date: "2025-02-25" },
  // { id: 2, location: "Delhi", severity: "Medium", status: "Resolved", date: "2025-02-20" },
  // { id: 3, location: "Bangalore, Karnataka", severity: "High", status: "Pending", date: "2025-03-05" },
  // { id: 4, location: "Hyderabad, Telangana", severity: "Low", status: "Resolved", date: "2025-03-02" },
  // { id: 5, location: "Chennai, Tamil Nadu", severity: "Medium", status: "In Progress", date: "2025-03-10" },
  // { id: 6, location: "Kolkata, West Bengal", severity: "High", status: "Pending", date: "2025-03-08" },
  // { id: 7, location: "Pune, Maharashtra", severity: "Low", status: "Resolved", date: "2025-02-28" },
  // { id: 8, location: "Ahmedabad, Gujarat", severity: "Medium", status: "In Progress", date: "2025-03-12" },
  // { id: 9, location: "Jaipur, Rajasthan", severity: "High", status: "Pending", date: "2025-03-15" },
  // { id: 10, location: "Lucknow, Uttar Pradesh", severity: "Medium", status: "Resolved", date: "2025-03-18" },
  // { id: 11, location: "Indore, Madhya Pradesh", severity: "High", status: "Pending", date: "2025-03-22" },
  // { id: 12, location: "Bhopal, Madhya Pradesh", severity: "Low", status: "Resolved", date: "2025-03-25" },
  // { id: 13, location: "Thiruvananthapuram, Kerala", severity: "Medium", status: "In Progress", date: "2025-03-28" },
  // { id: 14, location: "Patna, Bihar", severity: "High", status: "Pending", date: "2025-04-02" },
  // { id: 15, location: "Chandigarh", severity: "Low", status: "Resolved", date: "2025-04-05" },
  // { id: 16, location: "Guwahati, Assam", severity: "Medium", status: "In Progress", date: "2025-04-10" },
  // { id: 17, location: "Coimbatore, Tamil Nadu", severity: "High", status: "Pending", date: "2025-04-12" },
  // { id: 18, location: "Mysore, Karnataka", severity: "Low", status: "Resolved", date: "2025-04-15" },
  // { id: 19, location: "Nagpur, Maharashtra", severity: "Medium", status: "In Progress", date: "2025-04-18" },
  // { id: 20, location: "Visakhapatnam, Andhra Pradesh", severity: "High", status: "Pending", date: "2025-04-20" }
  // ]);
  
  const [filteredReports,setFilteredReports] = useState(reports);

  useEffect(() => {
    if (filter === "pending") {
      setFilteredReports(reports.filter(report => report.status === "Pending"));
    } else if (filter === "resolved") {
      setFilteredReports(reports.filter(report => report.status === "Resolved"));
    } else if (filter === "critical") {
      setFilteredReports(reports.filter(report => report.severity === "High"));
    } else if (filter === "new") {
      setFilteredReports(reports.filter(report => report.status === "New"));
    } else {
      setFilteredReports(reports); // Show all reports
    }
  }, [filter,reports]);
  

  return (
    <div className="damage-reports-container">
      <h1 className="damage-reports-header">Damage Reports</h1>

      {/* ✅ Layout for Table + Map */}
      <div className="damage-reports-content">
        {/* ✅ Damage Reports Table */}
        <div className="damage-reports-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Location</th>
                <th>Severity</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredReports.map((report) => (
                <tr key={report.id}>
                  <td>{report.id}</td>
                  <td>{report.location}</td>
                  <td className={report.severity === "High" ? "high-severity" : "medium-severity"}>
                    {report.severity}
                  </td>
                  <td className={report.status === "Resolved" ? "status-resolved" : "status-pending"}>
                    {report.status}
                  </td>
                  <td>{report.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ✅ Map Component */}
        <div className="map-container">
          <MapContainer center={[20.5937, 78.9629]} zoom={5} scrollWheelZoom={false} className="leaflet-container">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {filteredReports.map((report) => (
              <Marker key={report.id} position={[report.lat, report.lng]}>
                <Popup>
                  <strong>{report.location}</strong> <br />
                  Severity: {report.severity} <br />
                  Status: {report.status} <br />
                  Date: {report.date}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};


export default Damage_Reports;

// import React from "react";
// import "../App.css"; // Ensure you have the correct path to your CSS file

// const Damage_Reports = () => {
//   // Sample reports data
//   const reports = [
//     { id: 1, location: "Mumbai, Maharashtra", severity: "High", status: "Pending", date: "2025-02-25" },
//     { id: 2, location: "Delhi", severity: "Medium", status: "Resolved", date: "2025-02-20" },
//     { id: 3, location: "Bangalore, Karnataka", severity: "High", status: "Pending", date: "2025-03-05" },
//     { id: 4, location: "Hyderabad, Telangana", severity: "Low", status: "Resolved", date: "2025-03-02" },
//     { id: 5, location: "Chennai, Tamil Nadu", severity: "Medium", status: "In Progress", date: "2025-03-10" },
//     { id: 6, location: "Kolkata, West Bengal", severity: "High", status: "Pending", date: "2025-03-08" },
//     { id: 7, location: "Pune, Maharashtra", severity: "Low", status: "Resolved", date: "2025-02-28" },
//     { id: 8, location: "Ahmedabad, Gujarat", severity: "Medium", status: "In Progress", date: "2025-03-12" },
//     { id: 9, location: "Jaipur, Rajasthan", severity: "High", status: "Pending", date: "2025-03-15" },
//     { id: 10, location: "Lucknow, Uttar Pradesh", severity: "Medium", status: "Resolved", date: "2025-03-18" },
//   ];

//   return (
//     <div className="damage-reports-container">
//       <h1 className="damage-reports-header">Damage Reports</h1>

//       {/* Damage Reports Table */}
//       <div className="damage-reports-table">
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Location</th>
//               <th>Severity</th>
//               <th>Status</th>
//               <th>Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reports.map((report) => (
//               <tr key={report.id}>
//                 <td>{report.id}</td>
//                 <td>{report.location}</td>
//                 <td className={report.severity === "High" ? "high-severity" : "medium-severity"}>
//                   {report.severity}
//                 </td>
//                 <td className={report.status === "Resolved" ? "status-resolved" : "status-pending"}>
//                   {report.status}
//                 </td>
//                 <td>{report.date}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Damage_Reports;