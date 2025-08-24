import React, { useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import App from "../../App";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout">
      <NavBar onToggleSidebar={setSidebarOpen} />
      <div className="layoutContent">
        <SideBar isOpen={sidebarOpen} showFirmTitle={true} />
        <main className="mainContent">{children}</main>
      </div>
    </div>
  );
};

export default Layout;




