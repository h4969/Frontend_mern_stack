
import React from 'react';
import { Navigate } from 'react-router-dom';

const LandingPage = () => {
  const loginToken = localStorage.getItem('loginToken');
  return loginToken ? <Navigate to="/welcome" /> : <Navigate to="/login" />;
};

export default LandingPage;
