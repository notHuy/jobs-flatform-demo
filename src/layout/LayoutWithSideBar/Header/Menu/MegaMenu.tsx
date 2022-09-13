import React from "react";

import {
  MenuList,
  Box,
  Popover,
  Button,
  Typography,
  ListItemText,
  MenuItem,
  Divider,
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
  console.log("mega menu run");
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
        ".MuiBackdrop-invisible": {
          backdropFilter: "blur(2px)",
          backgroundColor: "rgba(0, 0, 0, 0.001)",
          borderRadius: "1rem",
        },
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
              disabled={item.isDisabled}
            >
              <ListItemText
                primaryTypographyProps={{
                  className: `header__megaMenu__menuItem__title ${
                    index === 0 ? "header__megaMenu__menuItem__titleActive" : ""
                  }`,
                }}
              >
                {item.title}
              </ListItemText>
              <ArrowForwardIosIcon
                fontSize="small"
                color="disabled"
                className="header__megaMenu__menuItem__icon"
              />{" "}
            </MenuItem>
          ))}
        </MenuList>
        <MenuList className="header__megaMenu__menuList">
          {megaMenuData.slice(5, 10).map((item, index) => (
            <MenuItem
              className={`header__megaMenu__menuItem header__megaMenu__menuItemGreen ${
                index === 0 ? "header__megaMenu__menuItemGreenActive" : ""
              }`}
              disabled={item.isDisabled}
            >
              <ListItemText
                primaryTypographyProps={{
                  className: `header__megaMenu__menuItem__title ${
                    index === 0 ? "header__megaMenu__menuItem__titleActive" : ""
                  }`,
                }}
              >
                {item.title}
              </ListItemText>

              <ArrowForwardIosIcon
                fontSize="small"
                color="disabled"
                className="header__megaMenu__menuItem__icon"
              />
            </MenuItem>
          ))}
        </MenuList>
        <MenuList className="header__megaMenu__menuList">
          {megaMenuData.slice(10, 15).map((item, index) => (
            <MenuItem
              className={`header__megaMenu__menuItem  header__megaMenu__menuItemRed ${
                index === 0 ? "header__megaMenu__menuItemRedActive" : ""
              } `}
              disabled={item.isDisabled}
            >
              <ListItemText
                primaryTypographyProps={{
                  className: `header__megaMenu__menuItem__title ${
                    index === 0 ? "header__megaMenu__menuItem__titleActive" : ""
                  }`,
                }}
              >
                {item.title}
              </ListItemText>
              <ArrowForwardIosIcon
                fontSize="small"
                color="disabled"
                className="header__megaMenu__menuItem__icon"
              />
            </MenuItem>
          ))}
        </MenuList>
      </div>
      <Divider />
      <Box className="header__megaMenu__footer">
        <Button variant="text">View more examples</Button>
      </Box>
    </Popover>
  );
};

export default MegaMenu;
