import React from "react";

import SearchItem from "./SearchItem";
import ScrollBar from "src/components/ScrollBar";

import { Box, Typography } from "src/components";
import { menuGroupSearch } from "src/data/data";

const SearchMenu = () => {
  return (
    <Box className="header__menuGroup__search__result">
      <ScrollBar>
        <Box className="header__menuGroup__search__resultGroup header__menuGroup__search__resultGroupShowResult">
          <Typography className="header__menuGroup__search__resultTitle">
            Dashboards
          </Typography>
          {menuGroupSearch.map((item) => {
            if (item.group === "dashboards") {
              return (
                <SearchItem item={item} key={item.id} typeOfIcons="result" />
              );
            }
          })}
        </Box>
        <Box className="header__menuGroup__search__resultGroup header__menuGroup__search__resultGroupShowResult">
          <Typography className="header__menuGroup__search__resultTitle">
            Application
          </Typography>
          {menuGroupSearch.map((item) => {
            if (item.group === "applications") {
              return (
                <SearchItem item={item} key={item.id} typeOfIcons="result" />
              );
            }
          })}
        </Box>
        <Box className="header__menuGroup__search__resultGroup header__menuGroup__search__resultGroupShowResult">
          <Typography className="header__menuGroup__search__resultTitle">
            Management
          </Typography>
          {menuGroupSearch.map((item) => {
            if (item.group === "management") {
              return (
                <SearchItem item={item} key={item.id} typeOfIcons="result" />
              );
            }
          })}
        </Box>
      </ScrollBar>
    </Box>
  );
};

export default SearchMenu;
