import React from "react";
import NotificationTimeline from "./NotificationTimeline";
import NotificationTasks from "./NotificationTasks";
import NotificationReport from "./NotificationReport";

import { Box } from "src/components";
import TabPanel from "src/components/TabPanel";
import ScrollBar from "src/components/ScrollBar";

interface NotificationTabContentProps {
  value: number;
}

const NotificationTabContent: React.FC<NotificationTabContentProps> = ({
  value,
}) => {
  return (
    <Box className="header__iconGroup__noti__tabContentOverallWrap">
      {/* <div className="header__iconGroup__noti__tabContentWrap">
        <div className="header__iconGroup__noti__tabContentContainer"> */}
      <ScrollBar>
        <TabPanel value={value} index={0}>
          <NotificationTimeline />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <NotificationTasks />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <NotificationReport />
        </TabPanel>
        {/* </div>
       </div> */}{" "}
      </ScrollBar>
    </Box>
  );
};

export default NotificationTabContent;
