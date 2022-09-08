import React from "react";

import {
  MenuList,
  Box,
  Popover,
  Button,
  Typography,
  ListItemText,
  MenuItem,
} from "src/components";
import { ArrowForwardIosIcon } from "src/components/Icon";
import { megaMenuData } from "src/data/data";

interface MegaMenuProps {
  id: string | undefined;
  anchorElMegaMenu: Element | ((element: Element) => Element) | null;
  handleClose: () => void;
  open: boolean;
}

const MegaMenu: React.FC<MegaMenuProps> = ({
  handleClose,
  open,
  id,
  anchorElMegaMenu,
}) => {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorElMegaMenu}
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
      disableScrollLock
      className="header__megaMenu__popOver"
    >
      <Box className="header__megaMenu__header">
        <Typography className="header__megaMenu__header__title">
          Mega Menus
        </Typography>
        <Typography className="header__megaMenu__header__des">
          This is an example for custom menus
        </Typography>
      </Box>
      <div className="header__megaMenu__menuListsContainer">
        <MenuList className="header__megaMenu__menuList">
          {megaMenuData.slice(0, 5).map((item, index) => (
            <MenuItem
              className={`header__megaMenu__menuItem header__megaMenu__menuItemGrey ${
                index === 0 ? "header__megaMenu__menuItemGreyActive" : ""
              } `}
            >
              <ListItemText>{item.title}</ListItemText>
              <Typography variant="body2" color="text.secondary">
                <ArrowForwardIosIcon fontSize="small" color="disabled" />
              </Typography>
            </MenuItem>
          ))}
        </MenuList>
        <MenuList className="header__megaMenu__menuList">
          {megaMenuData.slice(5, 10).map((item, index) => (
            <MenuItem
              className={`header__megaMenu__menuItem header__megaMenu__menuItemGreen ${
                index === 0 ? "header__megaMenu__menuItemGreenActive" : ""
              }`}
            >
              <ListItemText>{item.title}</ListItemText>
              <Typography variant="body2" color="text.secondary">
                <ArrowForwardIosIcon fontSize="small" color="disabled" />
              </Typography>
            </MenuItem>
          ))}
        </MenuList>
        <MenuList className="header__megaMenu__menuList">
          {megaMenuData.slice(10, 15).map((item, index) => (
            <MenuItem
              className={`header__megaMenu__menuItem  header__megaMenu__menuItemRed ${
                index === 0 ? "header__megaMenu__menuItemRedActive" : ""
              } `}
            >
              <ListItemText>{item.title}</ListItemText>
              <Typography variant="body2" color="text.secondary">
                <ArrowForwardIosIcon fontSize="small" color="disabled" />
              </Typography>
            </MenuItem>
          ))}
        </MenuList>
      </div>
      <Box className="header__megaMenu__footer">
        <Button variant="text">View more examples</Button>
      </Box>
    </Popover>
  );
};

export default MegaMenu;
