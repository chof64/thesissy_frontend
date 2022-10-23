import React from 'react';
import SideNavbar from '/src/components/Layout/Dashboard/SideNavbar';
import Navbar from '/src/components/Layout/Dashboard/Navbar';
import Content from '/src/components/Layout/Dashboard/Content';
import LayoutGlobal from "/src/components/Layout/LayoutGlobal";

export default function Index(){
    return (
            <>
            <div>
                  <SideNavbar />
                  <Navbar />
                  <Content />
                  {/* Dashboard Content*/}
            </div>
            </>
    )
}
Index.getLayout = function getLayout(page) {
    return (
      <LayoutGlobal title="Dashboard">
        {page}
      </LayoutGlobal>
    );
  };