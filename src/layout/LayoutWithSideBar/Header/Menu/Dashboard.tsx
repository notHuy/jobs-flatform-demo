import React from "react";
import CustomIcon from "src/components/CustomIcon";
import {
  Box,
  Popover,
  Typography,
  Grid,
  Paper,
  ButtonBase,
} from "src/components";
import { dashboardMenu } from "src/data/data";

interface MegaMenuProps {
  id: string | undefined;
  anchorElDashboard: Element | ((element: Element) => Element) | null;
  handleClose: () => void;
  open: boolean;
}

const Dashboard: React.FC<MegaMenuProps> = ({
  handleClose,
  open,
  id,
  anchorElDashboard,
}) => {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorElDashboard}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "center",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "left",
      }}
      sx={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(0, 0, 0, 0.001)",
        borderRadius: "1rem",
      }}
      disableScrollLock
      className="header__dashboard__popOver"
      PaperProps={{ className: "header__dashboard__popOverPaper" }}
    >
      <Box className="header__dashboard__header">
        <Typography className="header__dashboard__header__title">
          Dashboard
        </Typography>
        <Typography className="header__dashboard__header__des">
          This is just a menu example we've created
        </Typography>
      </Box>
      <Grid container spacing={2} className="header__dashboard__grid">
        {dashboardMenu.map((item) => (
          <Grid item xs={6} className="header__dashboard__gridItem">
            <Paper
              square={false}
              elevation={0}
              className="header__dashboard__gridItemPaper"
            >
              <ButtonBase
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  padding: "1rem",
                }}
                className="header__dashboard__buttonBase"
              >
                <CustomIcon
                  name={item.icon}
                  className="header__dashboard__customIcon"
                  sx={{ color: `${item.color}` }}
                />
                <Typography className="header__dashboard__name">
                  {item.name}
                </Typography>
              </ButtonBase>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Popover>
  );
};

export default Dashboard;
