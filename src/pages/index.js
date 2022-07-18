import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import SideBar from "../shared/components/Sidebar/sidebar";
import Content from "./content";

const Pages = () => {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

    return (
        <div className="d-flex container-fluid">
            <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
            <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
        </div>
    );
};

export default Pages;