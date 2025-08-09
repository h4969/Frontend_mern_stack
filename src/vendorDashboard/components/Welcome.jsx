
import React from 'react';

const Welcome = () => {
  const firmName = localStorage.getItem('firmName') || "Guest";

  return (
    <div className="firmSection" style={{ textAlign: 'center', marginTop: '0px' }}>
      <h2>Welcome, {firmName}</h2>
      <img 
        src="public/images/download.png"
        alt="Chef" 
        style={{ width: '200px', marginTop: '20px',width:'410px', }}
      />
    </div>
  );
};

export default Welcome;
