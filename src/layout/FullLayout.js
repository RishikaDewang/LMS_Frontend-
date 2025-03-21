import React from 'react';
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Container } from "reactstrap";


const FullLayout = () => {
  return (
    <main>
    
      <div className="pageWrapper d-lg-flex">
        {/* *******Sidebar********* */}
        <aside className="sidebarArea shadow" id="sidebarArea" style={{zIndex:"2"}}>
        <Sidebar />
        </aside>
        {/********Content Area**********/}

        <div className="contentArea">
          {/*******header**********/}
           <Header />
          {/* *******Middle Content********* */}
           <Container className="p-2 wrapper" fluid>
            <Outlet />
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
