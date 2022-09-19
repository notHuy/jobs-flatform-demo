import { CircularProgress } from "@mui/material";
import React from "react";

interface SuspendLoadingProps {
  fullHeight?: boolean;
}

const Suspend: React.FC<SuspendLoadingProps> = ({
  fullHeight,
}: SuspendLoadingProps) => {
  return (
    <div className={fullHeight ? "suspendLoadingFullHeight" : "suspendLoading"}>
      <CircularProgress color="inherit" />
    </div>
  );
};

export default Suspend;
