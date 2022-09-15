import React from "react";

import NotificationTab from "./NotificationTab";
import NotificationTabContent from "./NotificationTabContent";

import { Popover, Box, Typography, Button, Divider } from "src/components";
import { ArrowForwardTwoToneIcon } from "src/components/Icon";

interface NotificationProps {
  id: string | undefined;
  anchorEl: Element | ((element: Element) => Element) | null;
  handleClose: () => void;
  open: boolean;
}

const Notification: React.FC<NotificationProps> = ({
  id,
  open,
  anchorEl,
  handleClose,
}) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
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
      className="header__iconGroup__noti__popOver"
      PaperProps={{ className: "header__iconGroup__noti__popOverPaper" }}
    >
      <Box className="header__iconGroup__noti__header">
        <Box className="header__iconGroup__noti__headerHead">
          <Box className="header__iconGroup__noti__headerHeadLayer1"></Box>
          <Box className="header__iconGroup__noti__headerHeadLayer2"></Box>
          <Box className="header__iconGroup__noti__headerHeadLayer3">
            <Typography className="header__iconGroup__noti__headerHeadLayer3__title">
              Notifications
            </Typography>
            <Typography className="header__iconGroup__noti__headerHeadLayer3__content">
              You have <span>483</span> new messages
            </Typography>
          </Box>
        </Box>
        <NotificationTab value={value} handleChange={handleChange} />
      </Box>
      <NotificationTabContent value={value} />
      <Divider />
      <Box p={3} className="header__iconGroup__noti__footer">
        <Button
          variant="outlined"
          size="small"
          className="header__iconGroup__noti__footerBtn"
          endIcon={<ArrowForwardTwoToneIcon />}
        >
          View all
        </Button>
      </Box>
    </Popover>
  );
};

export default Notification;
