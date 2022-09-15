import React from "react";
import {
  Popover,
  Box,
  Typography,
  MenuList,
  MenuItem,
  ListItemText,
  Icon,
  Tooltip,
  IconButton,
} from "src/components";
import { langData } from "src/data/data";
import { US, CN, DE, ES, FR, SA } from "country-flag-icons/react/3x2";

interface LanguagesProps {
  id: string | undefined;
  anchorEl: Element | ((element: Element) => Element) | null;
  handleClose: () => void;
  handleClickLang: (event: React.MouseEvent<HTMLButtonElement>) => void;
  open: boolean;
}

const Languages: React.FC<LanguagesProps> = ({
  id,
  open,
  anchorEl,
  handleClose,
  handleClickLang,
}) => {
  const renderIcon = (icon: string | number) => {
    switch (icon) {
      case "1":
        return <US />;
      case "2":
        return <DE />;
      case "5":
        return <CN />;
      case "3":
        return <ES />;
      case "4":
        return <FR />;
      case "6":
        return <SA />;
    }
  };

  const [selectedLang, setSelectedLang] = React.useState("1");
  const handleClick = (index: string) => (event: React.SyntheticEvent) => {
    setSelectedLang(index);
    handleClose();
  };
  return (
    <>
      <Tooltip title="Languages">
        <IconButton
          aria-label="delete"
          size="medium"
          className="header__iconGroup__iconButton header__iconGroup__iconButtonLang"
          onClick={handleClickLang}
        >
          {renderIcon(selectedLang)}
        </IconButton>
      </Tooltip>{" "}
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
        className="header__iconGroup__lang__popOver"
        PaperProps={{ className: "header__iconGroup__lang__popOverPaper" }}
      >
        <Box className="header__iconGroup__lang">
          <Typography className="header__iconGroup__lang__tittle">
            Language Switcher
          </Typography>
          <MenuList className="header__iconGroup__lang__menuList">
            {langData.map((item, index) => (
              <MenuItem
                className={`header__iconGroup__lang__menuItem header__iconGroup__lang__menuItemGrey ${
                  selectedLang === item.id
                    ? "header__iconGroup__lang__menuItemGreyActive"
                    : ""
                } `}
                key={item.icon}
                onClick={handleClick(item.id)}
              >
                <Icon
                  sx={{ fontSize: 22 }}
                  className="header__iconGroup__lang__menuItem__icon"
                >
                  {renderIcon(item.id)}
                </Icon>
                <ListItemText
                  primaryTypographyProps={{
                    className: "header__iconGroup__lang__menuItem__title",
                  }}
                >
                  {item.title}
                </ListItemText>
              </MenuItem>
            ))}
          </MenuList>
        </Box>
      </Popover>
    </>
  );
};

export default Languages;
