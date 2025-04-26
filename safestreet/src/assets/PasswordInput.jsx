import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

function PasswordInput({ value, onChange, placeholder, required }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div style={{ position: 'relative' }}>
      <input
        type={passwordVisible ? 'text' : 'password'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        style={{ paddingRight: '30px' }} // Add padding to accommodate the icon
      />
      <span
        onClick={togglePasswordVisibility}
        style={{
          position: 'absolute',
          right: '15px',
          top: '40%',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
          fontSize: '20px',
        }}
      >
        {passwordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
      </span>
    </div>
  );
}

export default PasswordInput;
