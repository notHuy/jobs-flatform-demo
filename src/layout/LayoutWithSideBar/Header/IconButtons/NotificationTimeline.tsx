import React from "react";

import CustomIcon from "src/components/CustomIcon";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  Typography,
  AvatarGroup,
  Avatar,
  Box,
  Card,
  CardMedia,
  Button,
} from "src/components";
import { dataTimeline } from "src/data/data";

const NotificationTimeline: React.FC = () => {
  return (
    <Timeline className="header__iconGroup__noti__timelineContainer">
      {dataTimeline.map(({ id, icon, title, content }) => (
        <TimelineItem
          className="header__iconGroup__noti__timelineItem"
          key={id}
        >
          <TimelineSeparator className="header__iconGroup__noti__timelineSeperator">
            <TimelineDot
              children={icon && <CustomIcon name={icon} />}
              className="header__iconGroup__noti__timelineDot"
              sx={{
                left: ` ${icon ? "-18.9px" : "-6px"}`,
                color: ` ${!icon ? "red" : "white"}`,
                borderColor: ` ${!icon ? "red" : ""}`,
                backgroundColor: ` ${
                  !icon
                    ? "white"
                    : icon === "BusinessCenterTwoTone"
                    ? "rgb(87, 202, 34)"
                    : "rgb(85, 105, 255)"
                }`,
              }}
            />
            <TimelineConnector className="header__iconGroup__noti__timelineConnector" />
          </TimelineSeparator>
          <TimelineContent className="header__iconGroup__noti__timelineContent">
            <Typography className="header__iconGroup__noti__timelineContentText">
              {title}
            </Typography>
            <Typography className="header__iconGroup__noti__timelineContentSubText">
              {content}
            </Typography>
            {icon === "BusinessCenterTwoTone" && (
              <Box className="header__iconGroup__noti__timelineContentAvatarGroup">
                <AvatarGroup
                  total={5}
                  sx={{
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      fontSize: 13,
                      fontWeight: "bold",
                      backgroundColor: "transparent",
                      color: "rgba(34, 51, 84, 0.7)",
                    },
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://tokyo.bloomui.com/static/images/avatars/1.jpg"
                  />
                  <Avatar
                    alt="Travis Howard"
                    src="https://tokyo.bloomui.com/static/images/avatars/2.jpg"
                  />
                  <Avatar
                    alt="Cindy Baker"
                    src="https://tokyo.bloomui.com/static/images/avatars/3.jpg"
                  />
                </AvatarGroup>
              </Box>
            )}
            {icon === "AssignmentIndTwoTone" && (
              <Box className="header__iconGroup__noti__timelineContentImageGroup">
                <Card
                  raised
                  className="header__iconGroup__noti__timelineContentImageGroupCard"
                >
                  <CardMedia
                    component="img"
                    image="https://tokyo.bloomui.com/static/images/placeholders/fitness/1.jpg"
                    alt="Paella dish"
                  />
                </Card>
                <Card
                  raised
                  className="header__iconGroup__noti__timelineContentImageGroupCard"
                >
                  <CardMedia
                    component="img"
                    image="https://tokyo.bloomui.com/static/images/placeholders/fitness/2.jpg"
                    alt="Paella dish"
                  />
                </Card>
                <Card
                  raised
                  className="header__iconGroup__noti__timelineContentImageGroupCard"
                >
                  <CardMedia
                    component="img"
                    image="https://tokyo.bloomui.com/static/images/placeholders/fitness/3.jpg"
                    alt="Paella dish"
                  />
                </Card>
              </Box>
            )}
            {!icon && (
              <Box className="header__iconGroup__noti__timelineContentButtonGroup">
                <Button
                  size="small"
                  fullWidth
                  variant="contained"
                  className="header__iconGroup__noti__timelineContentButtonGroupButton"
                >
                  Submit report
                </Button>
              </Box>
            )}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default NotificationTimeline;
