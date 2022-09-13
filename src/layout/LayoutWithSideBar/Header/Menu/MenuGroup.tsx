import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Search from "./Search";
import MegaMenu from "./MegaMenu";
import Dashboard from "./Dashboard";

import { Box, Stack, Divider, Button, IconButton } from "src/components";

const MenuGroup: React.FC = () => {
  const [anchorElSearch, setAnchorElSearch] =
    useState<HTMLButtonElement | null>(null);

  const [anchorElMegaMenu, setAnchorElMegaMenu] =
    useState<HTMLButtonElement | null>(null);

  const [anchorElDashBoard, setAnchorElDashboard] =
    useState<HTMLButtonElement | null>(null);

  const handleClickSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElSearch(event.currentTarget);
  };
  const handleClickMegaMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElMegaMenu(event.currentTarget);
  };
  const handleClickDashboard = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElDashboard(event.currentTarget);
  };

  const handleCloseSearch = () => {
    setAnchorElSearch(null);
  };
  const handleCloseMegaMenu = () => {
    setAnchorElMegaMenu(null);
  };
  const handleCloseDashboard = () => {
    setAnchorElDashboard(null);
  };

  const openSearch = Boolean(anchorElSearch);
  const openMegaMenu = Boolean(anchorElMegaMenu);
  const openDashboard = Boolean(anchorElDashBoard);

  const id = openMegaMenu ? "simple-popover" : undefined;

  console.log("menu group render");
  return (
    <Stack direction="row" className="header__menuGroup">
      <IconButton onClick={handleClickSearch}>
        <SearchIcon className="header__menuGroup__searchButton" />
      </IconButton>
      <Search
        id={id}
        handleClose={handleCloseSearch}
        open={openSearch}
        anchorElDashboard={anchorElSearch}
      />
      <Divider
        orientation="vertical"
        flexItem
        className="header__menuGroup__divider"
      />
      <Box
        sx={{
          marginLeft: "1rem",
          gap: "1rem",
        }}
      >
        <Button
          endIcon={<KeyboardArrowDownIcon />}
          variant="text"
          onClick={handleClickMegaMenu}
          className="header__menuGroup_button"
          disableRipple={true}
        >
          Mega Menu
        </Button>
        <MegaMenu
          id={id}
          handleClose={handleCloseMegaMenu}
          open={openMegaMenu}
          anchorElMegaMenu={anchorElMegaMenu}
        />

        <Button
          endIcon={<KeyboardArrowDownIcon />}
          variant="text"
          onClick={handleClickDashboard}
          className="header__menuGroup_button"
          disableRipple={true}
        >
          Dashboards
        </Button>
        <Dashboard
          id={id}
          handleClose={handleCloseDashboard}
          open={openDashboard}
          anchorElDashboard={anchorElDashBoard}
        />
      </Box>
    </Stack>
  );
};

export default MenuGroup;
