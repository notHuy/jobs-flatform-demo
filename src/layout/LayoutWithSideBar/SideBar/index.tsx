import React from "react";
import { styled } from "@mui/material/styles";

import { Box, Divider } from "src/components";
import MainSideBar from "./MainSideBar";
import FooterButton from "./FooterButton";

interface SideBarProp {
  className?: string;
}

const DividerWrapper = styled(Divider)(
  () => `
    &{
      width: 100%;
      border-color: rgba(255, 255, 255, 0.1);
      height: 1px;
      margin-top:15px;
      margin-bottom: 10px;
      }
    `
);

const SideBar: React.FC<SideBarProp> = ({ className }) => {
  return (
    <Box className={`sideBar__container ${className}`}>
      <MainSideBar />
      <DividerWrapper />
      <FooterButton />
    </Box>
  );
};

export default SideBar;
