import React, { useState } from "react";
import { useSelector } from "react-redux";

import {
  Box,
  Button,
  Typography,
  Popover,
  MenuList,
  MenuItem,
  ListItemText,
} from "src/components";
import { KeyboardArrowDownIcon } from "src/components/Icon";
import { filterJobsSelectors } from "src/slices/filterJobs";
import { sortBarMode } from "src/data/data";

const SortBar: React.FC = () => {
  const selectFilteredJobsLength = useSelector(
    filterJobsSelectors.selectFilteredJobsLength
  );
  const selectJobsLength = useSelector(filterJobsSelectors.selectJobsLength);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [selectedMode, setSelectedMode] = React.useState("1");

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickItem = (index: string) => (event: React.SyntheticEvent) => {
    setSelectedMode(index);
    handleClose();
  };

  console.log("render");
  return (
    <Box className="board__sortBar__container">
      <Box className="board__sortBar__mainContent">
        <Typography
          sx={{
            color: "rgba(34, 51, 84, 0.7)",
            lineHeight: "1.75",
            fontSize: "14px",
          }}
          className="board__sortBar__content__typo"
        >
          Showing
          <span> {selectFilteredJobsLength}</span> of total
          <span> {selectJobsLength} job positions</span>
        </Typography>
      </Box>
      <Button
        variant="contained"
        endIcon={<KeyboardArrowDownIcon />}
        className="jobboard__sortbar__button"
        onClick={handleClickOpen}
      >
        {sortBarMode.find((i) => i.id === selectedMode)?.name}
      </Button>{" "}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          ".MuiBackdrop-invisible": {
            backdropFilter: "blur(2px)",
            backgroundColor: "rgba(0, 0, 0, 0.001)",
            borderRadius: "1rem",
          },
        }}
        disableScrollLock
        className="board__sortBar__popOver"
        PaperProps={{ className: "board__sortBar__popOverPaper" }}
      >
        <Box className="board__sortBar">
          <MenuList className="board__sortBar__menuList">
            {sortBarMode.map((item, index) => (
              <MenuItem
                className={`board__sortBar__menuItem board__sortBar__menuItemGrey ${
                  selectedMode === item.id
                    ? "board__sortBar__menuItemGreyActive"
                    : ""
                } `}
                key={item.id}
                onClick={handleClickItem(item.id)}
              >
                {item.name}
              </MenuItem>
            ))}
          </MenuList>
        </Box>
      </Popover>
    </Box>
  );
};

export default SortBar;
