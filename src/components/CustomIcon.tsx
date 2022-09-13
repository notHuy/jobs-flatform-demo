import React from "react";
import * as MUIcon from "@mui/icons-material/";

interface IconProps {
  name: string;
  [x: string]: any;
}

const CustomIcon: React.FC<IconProps> = ({ name, ...rest }) => {
  const IconComponent = MUIcon[name as keyof typeof MUIcon];
  return IconComponent ? <IconComponent {...rest} /> : null;
};

export default CustomIcon;
