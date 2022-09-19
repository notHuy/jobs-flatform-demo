import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import SideBar from "./SideBar";
import Header from "./Header";

import SuspenseLoading from "src/components/SuspenseLoading";

import { Box } from "src/components";

interface LayoutWithSideBarProps {
  children?: React.ReactNode;
}

const LayoutWithSideBar: React.FC<LayoutWithSideBarProps> = () => {
  console.log("layout redendered");
  return (
    <>
      <Box className="layout__container">
        <Header />
        <SideBar />
        <Box className="layout__content__container">
          <Suspense fallback={<SuspenseLoading fullHeight/>}>
            <Outlet />
          </Suspense>
        </Box>
      </Box>
    </>
  );
};

export default LayoutWithSideBar;
