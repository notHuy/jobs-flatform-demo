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
          variant="h4"
          component="h4"
          align="center"
          className="board__title__container__mainTitle"
        >
          {t("JOBBOARD_TITLE")}
        </Typography>
        <Typography
          align="center"
          sx={{ color: "rgba(34, 51, 84, 0.7)", fontSize: "16px" }}
        >
          {t("JOBBOARD_SUBTITLE")}
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
