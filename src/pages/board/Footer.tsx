import React from "react";
import { Box, Typography, Paper } from "src/components";

const Footer: React.FC = () => {
  return (
    <Paper className="footer__wrap ">
      <Box className="footer__container">
        <Typography>© 2022 - Tokyo React Typescript Admin Dashboard</Typography>
        <Typography>Crafted by H</Typography>
      </Box>
    </Paper>
  );
};

export default Footer;
