import React from "react";
import { Box, Typography, IconButton } from "src/components";
import {
  HistoryIcon,
  KeyboardArrowRightTwoToneIcon,
  StarTwoToneIcon,
  CloseTwoToneIcon,
} from "src/components/Icon";

interface SearchItemProps {
  item?: {
    id: string;
    name: string;
    group: string;
  };
  typeOfIcons: string;
}

const SearchItem: React.FC<SearchItemProps> = (props: SearchItemProps) => {
  const renderIcons = (typeOfIcons: string) => {
    switch (typeOfIcons) {
      case "result":
        return <KeyboardArrowRightTwoToneIcon />;
      case "recent":
        return (
          <div>
            <IconButton
              className="header__menuGroup__search__endIconBtn"
              size="small"
            >
              <StarTwoToneIcon fontSize="small" color="primary" />
            </IconButton>
            <IconButton
              className="header__menuGroup__search__endIconBtn"
              size="small"
            >
              <CloseTwoToneIcon fontSize="small" color="error" />
            </IconButton>
          </div>
        );
      case "saved":
        return (
          <IconButton
            className="header__menuGroup__search__endIconBtn"
            size="small"
          >
            <CloseTwoToneIcon fontSize="small" color="error" />
          </IconButton>
        );
    }
  };
  return (
    <Box className="header__menuGroup__search__itemContainer">
      <Box className="header__menuGroup__search__itemLeft">
        <HistoryIcon className="header__menuGroup__search__itemLeftIcon" />
        <Typography className="header__menuGroup__search__itemLeftText">
          {props.item?.name}
        </Typography>
      </Box>
      {renderIcons(props.typeOfIcons)}
    </Box>
  );
};

export default SearchItem;
