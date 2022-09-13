import React from "react";

import MenuGroup from "./Menu/MenuGroup";
import IconButtonGroups from "./IconButtons/IconButtonsGroup";

import { Box } from "src/components";

const Header: React.FC = () => {
  console.log("header render");
  return (
    <>
      <Box className="header__container custom-paper-elevation">
        <MenuGroup />
        <IconButtonGroups />
      </Box>
    </>
  );
};

export default Header;
