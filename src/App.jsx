// import React from 'react'
// import LandingPage from './vendorDashboard/pages/LandingPage'
// import { Routes,Route } from 'react-router-dom'

// import "./App.css"
// import NavBar from './vendorDashboard/components/NavBar'
// import Login from './vendorDashboard/components/forms/Login'
// import NotFound from './vendorDashboard/components/forms/NotFound'
// const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path='/'element={<LandingPage/>}/>
//         <Route path='/*' element={<NotFound/>}/>
//       </Routes>
      
//     </div>
//   )
// }

// export default App;
// import React from 'react'
// import LandingPage from './vendorDashboard/pages/LandingPage'
// import { Routes, Route } from 'react-router-dom'

// import "./App.css"
// import NavBar from './vendorDashboard/components/NavBar'
// import Login from './vendorDashboard/components/forms/Login'
// import NotFound from './vendorDashboard/components/forms/NotFound'

// const App = () => {
//   return (
//     <div>
//       <Routes>
//           <Route path='/' element = {<LandingPage />}/>
//           <Route path='/*' element = {<NotFound />} />
//       </Routes>
//     </div>
//   )
// }

// export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './vendorDashboard/pages/LandingPage';
import AddFirm from './vendorDashboard/components/forms/AddFirm';
import AddProduct from './vendorDashboard/components/forms/AddProduct';
import AllProducts from './vendorDashboard/components/AllProducts';
import Login from './vendorDashboard/components/forms/Login';
import Register from './vendorDashboard/components/forms/Register';
import Welcome from './vendorDashboard/components/Welcome';
import NotFound from './vendorDashboard/components/forms/NotFound';
import NavBar from './vendorDashboard/components/NavBar';
import SideBar from './vendorDashboard/components/SideBar';

import './App.css';

const App = () => {
  const loginToken = localStorage.getItem('loginToken');
  const firmName = localStorage.getItem('firmName');

  return (
    <div>
      <NavBar />
      <div className="collectionSection">
        <SideBar showFirmTitle={!firmName} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register   showLoginHandler={()=>window.location.href="/login"}/>}/>
          {loginToken && (
            <>
              <Route path="/add-firm" element={<AddFirm />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/all-products" element={<AllProducts />} />
            </>
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
