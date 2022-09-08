import React from "react";
import {
  Box,
  Popover,
  Typography,
  Paper,
  IconButton,
  InputBase,
  Divider,
} from "src/components";
import { SearchIcon, HistoryIcon, ExpandMoreIcon } from "src/components/Icon";
import { menuGroupSearch } from "src/data/data";
import ScrollBar from "src/components/ScrollBar";

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
}) => {
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
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(0, 0, 0, 0.001)",
        borderRadius: "1rem",
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
          />
          <Paper
            square={false}
            className="header__menuGroup__search__inputEscBtn"
          >
            esc
          </Paper>
        </Paper>
      </Box>
      <Divider />
      <Box className="header__menuGroup__search__result">
        <ScrollBar>
          {/* <Box className="header__menuGroup__search__resultWrap">
          <Box className="header__menuGroup__search__resultContainer"> */}
          <Box className="header__menuGroup__search__resultGroup">
            <Typography className="header__menuGroup__search__resultTitle">
              Dashboards
            </Typography>
            {menuGroupSearch.map((item) => {
              if (item.group === "dashboards") {
                return (
                  <Box className="header__menuGroup__search__itemContainer">
                    <Box className="header__menuGroup__search__itemLeft">
                      <HistoryIcon />
                      <Typography>{item.name}</Typography>
                    </Box>
                    <ExpandMoreIcon />
                  </Box>
                );
              }
            })}
          </Box>
          <Box className="header__menuGroup__search__resultGroup">
            <Typography className="header__menuGroup__search__resultTitle">
              Application
            </Typography>
            {menuGroupSearch.map((item) => {
              if (item.group === "applications") {
                return (
                  <Box className="header__menuGroup__search__itemContainer">
                    <Box className="header__menuGroup__search__itemLeft">
                      <HistoryIcon />
                      <Typography>{item.name}</Typography>
                    </Box>
                    <ExpandMoreIcon />
                  </Box>
                );
              }
            })}
          </Box>
          <Box className="header__menuGroup__search__resultGroup">
            <Typography className="header__menuGroup__search__resultTitle">
              Management
            </Typography>
            {menuGroupSearch.map((item) => {
              if (item.group === "management") {
                return (
                  <Box className="header__menuGroup__search__itemContainer">
                    <Box className="header__menuGroup__search__itemLeft">
                      <HistoryIcon />
                      <Typography>{item.name}</Typography>
                    </Box>
                    <ExpandMoreIcon />
                  </Box>
                );
              }
            })}
          </Box>
          {/* </Box>
        </Box> */}
        </ScrollBar>
      </Box>
    </Popover>
  );
};

export default Search;
