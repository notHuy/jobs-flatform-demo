import * as React from "react";
import { Slide } from "src/components";
import { TransitionProps } from "@mui/material/transitions";

export const TransitionDialog = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});
