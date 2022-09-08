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
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1rem",
      }}
    >
      <Box>
        <Typography sx={{color:"rgba(34, 51, 84, 0.7)"}}>
          Showing
          <span style={{ fontWeight: "bold" }}>
            {" "}
            {selectFilteredJobsLength}
          </span>{" "}
          of total
          <span style={{ fontWeight: "bold" }}>
            {" "}
            {selectJobsLength} job positions
          </span>
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
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(0, 0, 0, 0.001)",
          borderRadius: "1rem",
        }}
        disableScrollLock
        className="header__iconGroup__lang__popOver"
        PaperProps={{ className: "header__iconGroup__lang__popOverPaper" }}
      >
        <Box className="header__iconGroup__lang">
          <MenuList className="header__iconGroup__lang__menuList">
            {sortBarMode.map((item, index) => (
              <MenuItem
                className={`header__iconGroup__lang__menuItem header__iconGroup__lang__menuItemGrey ${
                  selectedMode === item.id
                    ? "header__iconGroup__lang__menuItemGreyActive"
                    : ""
                } `}
                key={item.id}
                onClick={handleClickItem(item.id)}
              >
                <ListItemText>{item.name}</ListItemText>
              </MenuItem>
            ))}
          </MenuList>
        </Box>
      </Popover>
    </Box>
  );
};

export default SortBar;
