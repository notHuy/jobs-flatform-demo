import React from "react";
import { styled } from "@mui/material/styles";

import {
  Badge,
  Avatar,
  IconButton,
  Tooltip,
  Popover,
  Box,
  FormControl,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Button,
} from "src/components";
import {
  ForumIcon,
  MarkChatReadIcon,
  SearchIcon,
  ArrowForwardIcon,
} from "src/components/Icon";
import ScrollBar from "src/components/ScrollBar";
import { messageUserData } from "src/data/data";

interface MessageProps {
  id: string | undefined;
  anchorEl: Element | ((element: Element) => Element) | null;
  handleClose: () => void;
  handleClickMessage: (event: React.MouseEvent<HTMLButtonElement>) => void;
  open: boolean;
}

const BadgeAvatarWrapper = styled(Badge)(
  () => `
       .MuiBadge-badge{
          bottom: 0.5rem;
          left: 0.3rem;
       }
      `
);

const Message: React.FC<MessageProps> = ({
  id,
  open,
  anchorEl,
  handleClose,
  handleClickMessage,
}) => {
  return (
    <>
      <Tooltip title="Messenger">
        <IconButton
          aria-label="messenger"
          size="medium"
          className="header__iconGroup__iconButton header__iconGroup__iconButtonMessage"
          onClick={handleClickMessage}
        >
          <Badge
            color="error"
            variant="dot"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <ForumIcon fontSize="inherit" sx={{ fontSize: 20 }} />
          </Badge>
        </IconButton>
      </Tooltip>
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
        className="header__iconGroup__noti__popOver"
        PaperProps={{ className: "header__iconGroup__noti__popOverPaper" }}
      >
        <Box className="header__iconGroup__message__container">
          <Box p={1} className="header__iconGroup__message__headerContainer">
            <IconButton className="header__iconGroup__message__headerButton">
              <MarkChatReadIcon className="header__iconGroup__message__headerButtonIcon" />{" "}
              Mark all as seen
            </IconButton>
            <BadgeAvatarWrapper
              color="error"
              variant="dot"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Avatar
                alt="header__iconGroup__avatar"
                src="https://tokyo.bloomui.com/static/images/avatars/3.jpg"
                className="header__iconGroup__iconButtonAvatar_Avatar"
                variant="circular"
              />
            </BadgeAvatarWrapper>
          </Box>
          <Box className="header__iconGroup__message__searchContainer">
            <FormControl className="header__iconGroup__message__searchFormControl">
              <IconButton
                aria-label="menu"
                className="header__iconGroup__message__searchIcon"
              >
                <SearchIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                inputProps={{ "aria-label": "searchInput" }}
                className="header__iconGroup__message__searchInputbase"
                placeholder="Search messages"
              />
            </FormControl>
          </Box>
          <Box className="header__iconGroup__message__displayContainer">
            <ScrollBar>
              <List className="header__iconGroup__message__list">
                {messageUserData.map((item) => (
                  <>
                    <Divider />
                    <ListItem
                      key={item.id}
                      className="header__iconGroup__message__listItem"
                    >
                      <ListItemAvatar>
                        <Avatar
                          alt="header__iconGroup__avatar"
                          src={item.imageUrl}
                          className="header__iconGroup__iconButtonAvatar_Avatar"
                          variant="circular"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={`${item.name}`}
                        secondary={
                          <Box>
                            <span className="header__iconGroup__message__listItemOnlineStatusCircle"></span>
                            Online
                          </Box>
                        }
                        primaryTypographyProps={{
                          className:
                            "header__iconGroup__message__listItemTitle",
                        }}
                        secondaryTypographyProps={{
                          className:
                            "header__iconGroup__message__listItemOnlineStatus",
                        }}
                      />
                      <Button className="header__iconGroup__message__listItemChatButton">
                        Chat
                      </Button>
                    </ListItem>
                  </>
                ))}
              </List>
            </ScrollBar>
          </Box>
          <Box p={2} className="header__iconGroup__message__viewMoreContainer">
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              className="header__iconGroup__message__viewMoreButton"
            >
              View all participants
            </Button>
          </Box>
        </Box>
      </Popover>
    </>
  );
};

export default Message;
