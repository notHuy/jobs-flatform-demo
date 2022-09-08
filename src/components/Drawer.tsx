import React, { PropsWithChildren } from "react";
import { Box, IconButton, Drawer, Tooltip } from "src/components";
import { MenuIcon } from "src/components/Icon";

interface ReactFC<T = { className?: string }>
  extends React.FC<PropsWithChildren<T>> {}

interface TemporaryDrawerProps {
  className?: string;
  btnClassName?: string;
  tooltip?: string;
}

const TemporaryDrawer: ReactFC<TemporaryDrawerProps> = ({
  children,
  className,
  btnClassName,
  tooltip,
}) => {
  const [state, setState] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  const list = () => (
    <Box
      sx={{ width: 290 }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      {children}
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Tooltip title={tooltip ? tooltip : ""}>
          <IconButton
            aria-label="menuBtn"
            onClick={toggleDrawer(true)}
            className={btnClassName}
          >
            <MenuIcon />
          </IconButton>
        </Tooltip>
        <Drawer
          anchor="left"
          open={state}
          onClose={toggleDrawer(false)}
          className={className}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default TemporaryDrawer;
