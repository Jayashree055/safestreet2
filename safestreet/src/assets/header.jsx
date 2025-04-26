import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsThreeDotsVertical,
  BsSearch
} from 'react-icons/bs';

function Header({ OpenSidebar }) {
  const navigate = useNavigate(); 
  const [showIcons, setShowIcons] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    setUserEmail(email);

    if (email) {
      fetch("http://localhost:5000/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
        .then((response) => response.json())
        .then((data) => {
          setUserName(data.name);
        })
        .catch((err) => console.error("Failed to fetch user data", err));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    setUserName(null);
    setUserEmail(null);
    window.location.href = "/";
  };

  return (
    <header className='header'>
      <div className='header-left'>
        <BsSearch className='icon' />
        <input type='text' placeholder='Search' />
      </div>

      <div className='header-right desktop-icons'>
        <BsFillBellFill className='icon' />

        {/* MAIL ICON */}
        <div 
          className='mail-container' 
          onClick={() => navigate('/EmailHistory')}  
        >
          <BsFillEnvelopeFill className='icon' />
        </div>

        {/* PROFILE */}
        <div className='profile-container'>
          <BsPersonCircle
            className='icon profile-icon'
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
          />

          {showProfileDropdown && (
            <div className='dropdown-card'>
              <p className='dropdown-name'>Hello, {userName || 'User'}</p>
              <p className='dropdown-email'>{userEmail || 'Please login'}</p>
              <button onClick={handleLogout} className='logout-btn'>Logout</button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      <div className='mobile-menu'>
        <button
          className='mobile-menu-button'
          onClick={() => setShowIcons(!showIcons)}
        >
          <BsThreeDotsVertical className='icon' />
        </button>

        {showIcons && (
          <div className='mobile-icons-dropdown'>
            <BsFillBellFill className='icon' />
            
            {/* Optional: make mobile envelope clickable too */}
            <BsFillEnvelopeFill 
              className='icon' 
              onClick={() => navigate('/EmailHistory')}
            />
            
            <BsPersonCircle className='icon' />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
