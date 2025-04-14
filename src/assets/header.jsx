import React, { useState } from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsJustify, BsSearch, BsX, BsThreeDotsVertical } from 'react-icons/bs';

function Header({ OpenSidebar }) {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <header className='header'>

        
        <div className='header-left'>
            <BsSearch className='icon'/>
            <input type='text' placeholder='Search'/><br/>

        </div>
        <div className='header-right desktop-icons'>
        <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />
        <BsPersonCircle className='icon' />
      </div>
      
      {/* Mobile menu button and dropdown */}
      <div className='mobile-menu'>
        <button className='mobile-menu-button' onClick={() => setShowIcons(!showIcons)}>
          {showIcons ? <BsThreeDotsVertical className='icon' /> : <BsThreeDotsVertical className='icon' />}
        </button>
        
        
        {showIcons && (
          <div className='mobile-icons-dropdown'>
            <BsFillBellFill className='icon' />
            <BsFillEnvelopeFill className='icon' />
            <BsPersonCircle className='icon' />
          </div>
        )}
      </div>
    </header>        
    )
}
export default Header;

