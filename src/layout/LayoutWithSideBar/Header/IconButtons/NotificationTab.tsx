import React from "react";
import { Box, Tabs, Tab } from "src/components";

interface NotificationTabProps {
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const NotificationTab: React.FC<NotificationTabProps> = ({
  value,
  handleChange,
}) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        aria-label="basic tabs example"
        className="header__iconGroup__noti__tabs"
        TabIndicatorProps={{
          className: "header__iconGroup__noti__tabIndicator",
        }}
        variant="fullWidth"
      >
        <Tab
          label="Timeline"
          {...a11yProps(0)}
          className="header__iconGroup__noti__tab"
        />
        <Tab
          label="Test"
          {...a11yProps(1)}
          className="header__iconGroup__noti__tab"
        />
        <Tab
          label="Report"
          {...a11yProps(2)}
          className="header__iconGroup__noti__tab"
        />
      </Tabs>
    </Box>
  );
};

export default NotificationTab;
