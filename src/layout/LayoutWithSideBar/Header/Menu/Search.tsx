import React from "react";

import SearchMenu from "./SearchMenu";
import SearchStartMenu from "./SearchStartMenu";

import {
  Box,
  Popover,
  Typography,
  Paper,
  IconButton,
  InputBase,
  Divider,
} from "src/components";
import { SearchIcon } from "src/components/Icon";

interface MegaMenuProps {
  id: string | undefined;
  anchorElDashboard: Element | ((element: Element) => Element) | null;
  handleClose: () => void;
  open: boolean;
}

const Search: React.FC<MegaMenuProps> = ({
  handleClose,
  open,
  id,
  anchorElDashboard,
}: MegaMenuProps) => {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorElDashboard}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "center",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "left",
      }}
      sx={{
        ".MuiBackdrop-invisible": {
          backdropFilter: "blur(2px)",
          backgroundColor: "rgba(0, 0, 0, 0.001)",
          borderRadius: "1rem",
        },
      }}
      className="header__menuGroup__search__searchPopover"
      PaperProps={{ className: "header__menuGroup__search__searchPaper" }}
    >
      <Box className="header__menuGroup__search__inputContainer">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
          }}
          elevation={0}
          className="header__menuGroup__search__inputPaper"
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            inputProps={{ "aria-label": "searchInput" }}
            className="header__menuGroup__search__inputBase"
            placeholder="Search terms here..."
          />
          <Paper
            square={false}
            className="header__menuGroup__search__inputEscBtn"
          >
            <Typography className="header__menuGroup__search__inputEscBtnText">
              esc
            </Typography>
          </Paper>
        </Paper>
      </Box>
      <Divider />
      {/* <Box className="header__menuGroup__search__result"> */}
      {/* <Box className="header__menuGroup__search__resultWrap">
          <Box className="header__menuGroup__search__resultContainer"> */}
      {/* <SearchMenu /> */}
      <SearchStartMenu />
      {/* </Box>
        </Box> */}
      {/* </Box> */}
    </Popover>
  );
};

export default Search;
