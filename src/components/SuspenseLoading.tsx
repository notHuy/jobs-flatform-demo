import { CircularProgress } from "@mui/material";
import React from "react";

const Suspend: React.FC = () => {
  return (
    <div className="suspendLoading">
      <CircularProgress color="inherit" />
    </div>
  );
};

export default Suspend;
