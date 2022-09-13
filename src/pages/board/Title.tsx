import React from "react";
import { useTranslation } from "react-i18next";

import { Box, Typography } from "src/components";
import TemporaryDrawer from "../../components/Drawer";
import SearchSideBar from "./SearchSideBar";

const Title: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box mt={4.5} className="board__title__container">
      <Box>
        <Typography
          variant="h3"
          align="center"
          className="board__title__container__mainTitle"
        >
          Jobs platform
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{ color: "rgba(34, 51, 84, 0.7)" }}
        >
          Find your dream job, fast and easy!
        </Typography>
      </Box>
      <TemporaryDrawer
        btnClassName="board__title__menuButton"
        className="board__title__searchBarDraw"
      >
        <SearchSideBar className="board__searchSideBarContainerDrawer" />{" "}
      </TemporaryDrawer>
    </Box>
  );
};

export default Title;
