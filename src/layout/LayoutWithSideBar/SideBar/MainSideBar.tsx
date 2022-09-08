import React from "react";
import { Box, Divider } from "src/components";
import { AtmIcon } from "src/components/Icon";
import { styled } from "@mui/material/styles";

import AvatarGroup from "./AvatarGroup";
import AccordionGroup from "./AccordionGroup";

const DividerWrapper = styled(Divider)(
  () => `
    &{
      border-color: rgba(255, 255, 255, 0.1);
      height: 1px;
      margin: 27px 18px;
      }
    `
);

const MainSideBar: React.FC = () => {
  return (
    <>
      <Box className="sideBar__mainSideBarWrap">
        <Box className="sideBar__mainSideBarContainer">
          <Box mt={3}>
            <AtmIcon sx={{ width: 52, height: 38 }} />
          </Box>
          <AvatarGroup />
          <DividerWrapper />
          <AccordionGroup />
        </Box>
      </Box>
    </>
  );
};

export default MainSideBar;
