import React from "react";

import SearchItem from "./SearchItem";

import {
  Typography,
  Box,
  Divider,
  Grid,
  ListItem,
  List,
  Link,
} from "src/components";
import {
  ContactSupportTwoToneIcon,
  DashboardTwoToneIcon,
} from "src/components/Icon";
import ScrollBar from "src/components/ScrollBar";
import {
  menuGroupRecentSearch,
  menuGroupSavedSearch,
  menuGroupSearchPopularSearch,
} from "src/data/data";

interface SearchStartMenuProps {}

const SearchStartMenu: React.FC<SearchStartMenuProps> = () => {
  return (
    <>
      <Typography className="header__menuGroup__search__searchStartMenuText">
        <ContactSupportTwoToneIcon className="header__menuGroup__search__searchStartMenuTextIcon" />
        Start typing to see the search results...
      </Typography>
      <Box className="header__menuGroup__search__resultStartMenu">
        <ScrollBar>
          <Box sx={{ padding: "0px 18px 18px" }}>
            <Box className="header__menuGroup__search__resultGroup">
              <Typography className="header__menuGroup__search__resultTitle">
                Recent searches
              </Typography>
              {menuGroupRecentSearch.map((item) => (
                <SearchItem item={item} key={item.id} typeOfIcons="recent" />
              ))}
            </Box>
            <Box className="header__menuGroup__search__resultGroup">
              <Typography className="header__menuGroup__search__resultTitle">
                Saved searches
              </Typography>
              {menuGroupSavedSearch.map((item) => (
                <SearchItem item={item} key={item.id} typeOfIcons="saved" />
              ))}
            </Box>
            <Divider sx={{ margin: "20px 0", width: "auto" }} />
            <Box className="header__menuGroup__search__resultGroup">
              <Typography className="header__menuGroup__search__resultTitle">
                Popular searches
              </Typography>
              <Box p={2}>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    className="header__menuGroup__search__popularSearches__gridItem"
                  >
                    <Box className="header__menuGroup__search__popularSearches__gridSubContainer">
                      <DashboardTwoToneIcon
                        className="header__menuGroup__search__popularSearches__gridSubIcon"
                        fontSize="small"
                      />
                      <Typography className="header__menuGroup__search__popularSearches__gridSubText">
                        Dashboards
                      </Typography>
                    </Box>
                    <List>
                      {menuGroupSearchPopularSearch.map((item) => {
                        return (
                          item.group === "dashboards" && (
                            <ListItem
                              id={item.id}
                              className="header__menuGroup__search__popularSearches__gridSubListItem"
                            >
                              <Link underline="none">
                                <Typography className="header__menuGroup__search__popularSearches__gridSubItemText">
                                  {item.name}
                                </Typography>
                              </Link>
                            </ListItem>
                          )
                        );
                      })}
                    </List>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    className="header__menuGroup__search__popularSearches__gridItem"
                  >
                    <Box className="header__menuGroup__search__popularSearches__gridSubContainer">
                      <DashboardTwoToneIcon
                        className="header__menuGroup__search__popularSearches__gridSubIcon"
                        fontSize="small"
                      />
                      <Typography className="header__menuGroup__search__popularSearches__gridSubText">
                        Management
                      </Typography>
                    </Box>
                    <List>
                      {menuGroupSearchPopularSearch.map((item) => {
                        return (
                          item.group === "management" && (
                            <ListItem
                              id={item.id}
                              className="header__menuGroup__search__popularSearches__gridSubListItem"
                            >
                              <Link underline="none">
                                <Typography className="header__menuGroup__search__popularSearches__gridSubItemText">
                                  {item.name}
                                </Typography>
                              </Link>
                            </ListItem>
                          )
                        );
                      })}
                    </List>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </ScrollBar>
      </Box>
    </>
  );
};

export default SearchStartMenu;
