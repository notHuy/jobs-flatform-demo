import { Scrollbars } from "react-custom-scrollbars-2";

import { Box } from "@mui/material";
import React from "react";

interface ScrollBarsProps {
  children?: React.ReactNode;
  className?: string;
}

const ScrollBar: React.FC<ScrollBarsProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <Scrollbars
      autoHide
      renderThumbVertical={() => {
        return (
          <Box
            sx={{
              // display: "block",
              width: "6px",
              background: `rgba(34, 51, 84, 0.1)`,
              borderRadius: `12px`,
              transition: `background 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
              "&:hover": {
                background: `rgba(34, 51, 84, 0.3)`,
              },
            }}
          />
        );
      }}
      {...rest}
    >
      {children}
    </Scrollbars>
  );
};

export default ScrollBar;
