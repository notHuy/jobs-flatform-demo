import React, { useState } from "react";
import { Box, Typography } from "src/components";
import NotificationReportChart from "./NotificationReportChart";

const NotificationReport: React.FC = () => {
  return (
    <Box>
      <Typography
        variant="h6"
        sx={{ textAlign: "center" }}
        className="header__iconGroup__noti__detail__avatar__text"
      >
        Total Sales
      </Typography>
      <Typography
        className="header__iconGroup__noti__detail__avatar__subText"
        sx={{ textAlign: "center" }}
      >
        Total sales performance for last week
      </Typography>
      <NotificationReportChart />
    </Box>
  );
};

export default NotificationReport;
