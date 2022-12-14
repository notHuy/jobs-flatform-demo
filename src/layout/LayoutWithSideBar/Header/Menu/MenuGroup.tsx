import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Search from "./Search";
import MegaMenu from "./MegaMenu";
import Dashboard from "./Dashboard";

import { Box, Stack, Divider, Button, IconButton } from "src/components";

const MenuGroup: React.FC = () => {
  const [openSearch, setOpenSearch] = useState(false);

  const [anchorElMegaMenu, setAnchorElMegaMenu] =
    useState<HTMLButtonElement | null>(null);

  const [anchorElDashBoard, setAnchorElDashboard] =
    useState<HTMLButtonElement | null>(null);

  const handleClickOpenSearch = () => {
    setOpenSearch(true);
  };
  const handleClickMegaMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElMegaMenu(event.currentTarget);
  };
  const handleClickDashboard = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElDashboard(event.currentTarget);
  };

  const handleCloseSearch = () => {
    setOpenSearch(false);
  };
  const handleCloseMegaMenu = () => {
    setAnchorElMegaMenu(null);
  };
  const handleCloseDashboard = () => {
    setAnchorElDashboard(null);
  };

  const openMegaMenu = Boolean(anchorElMegaMenu);
  const openDashboard = Boolean(anchorElDashBoard);

  const id = openMegaMenu ? "simple-popover" : undefined;

  console.log("menu group render");
  return (
    <Stack direction="row" className="header__menuGroup">
      <IconButton
        onClick={handleClickOpenSearch}
        className="header__menuGroup__searchButtonButton"
      >
        <SearchIcon className="header__menuGroup__searchButtonIcon" />
      </IconButton>
      <Search id={id} handleClose={handleCloseSearch} open={openSearch} />
      <Divider
        orientation="vertical"
        flexItem
        className="header__menuGroup__divider"
      />
      <Box
        sx={{
          marginLeft: "18px",
          gap: "1rem",
        }}
      >
        <Button
          endIcon={<KeyboardArrowDownIcon />}
          variant="text"
          onClick={handleClickMegaMenu}
          className="header__menuGroup_button"
          disableRipple={true}
          size="small"
        >
          Mega menu
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
