
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const loginToken = localStorage.getItem('loginToken');

  const logoutHandler = () => {
    if (confirm("Are you sure to logout?")) {
      localStorage.removeItem("loginToken");
      localStorage.removeItem("firmId");
      localStorage.removeItem("firmName");
      navigate("/login");
    }
  };

  return (
    <div className="navSection">
      <div>Vendor Dashboard</div>
      <div>
        {!loginToken ? (
          <>
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/register')}>Register</button>
          </>
        ) : (
          <button onClick={logoutHandler}>Logout</button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
