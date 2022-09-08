import React from "react";
import ScrollBar from "src/components/ScrollBar";

import CustomIcon from "src/components/CustomIcon";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  Typography,
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
          <TimelineSeparator>
            <TimelineDot children={<CustomIcon name={icon} />} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>{title}</Typography>
            <Typography>{content}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default NotificationTimeline;
