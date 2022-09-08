import React from "react";
import * as MUIcon from "@mui/icons-material/";

interface IconProps {
  name: string;
  [x: string]: any;
}

const CustomIcon: React.FC<IconProps> = ({ name, ...rest }) => {
  console.log(MUIcon);
  const IconComponent = MUIcon[name as keyof typeof MUIcon];
  console.log(name);
  return IconComponent ? <IconComponent {...rest} /> : null;
};

export default CustomIcon;
