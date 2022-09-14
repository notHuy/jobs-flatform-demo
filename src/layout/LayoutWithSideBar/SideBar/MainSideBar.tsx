import React from "react";
import { Box, Divider, Tooltip } from "src/components";
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
            <Tooltip title="Tokyo React Typescript Admin Dashboard" arrow>
              <img
                src="https://i.imgur.com/HxdIvTO.png"
                alt="logoSideBar"
                style={{ height: 40, width: 70, marginLeft: "18px" }}
              ></img>
            </Tooltip>
          </Box>
          <DividerWrapper />
          <AvatarGroup />
          <DividerWrapper />
          <AccordionGroup />
        </Box>
      </Box>
    </>
  );
};

export default MainSideBar;
