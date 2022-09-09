import React from "react";
import { Paper } from "src/components";
import { styled } from "@mui/material/styles";

const loginIconsData = [
  {
    id: "1",
    imageUrl: "https://tokyo.bloomui.com/static/images/logo/auth0.svg",
    size: "80",
    left: "-20",
    top: "-40",
    imgWidth: "20",
    atl: "auth",
  },
  {
    id: "2",
    imageUrl: "https://tokyo.bloomui.com/static/images/logo/firebase.svg",
    size: "90",
    left: "70",
    top: "",
    imgWidth: "50",
    atl: "firebase",
  },
  {
    id: "3",
    imageUrl: "https://tokyo.bloomui.com/static/images/logo/jwt.svg",
    size: "110",
    left: "170",
    top: "-30",
    imgWidth: "80",
    atl: "jwt",
  },
  {
    id: "4",
    imageUrl: "https://tokyo.bloomui.com/static/images/logo/amplify.svg",
    size: "70",
    left: "",
    top: "",
    right: "-55",
    bottom: "0",
    imgWidth: "50",
    atl: "jwt",
  },
];

const PaperWrapper = styled(Paper)(
  () => `
        &{
        background-color: rgb(255, 255, 255);
        color: rgb(34, 51, 84);
        padding: 0px;
        overflow: hidden;
        border-radius: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(34, 51, 84, 0.1);
        transition: border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        position: absolute;
        &:hover{
            border-color: rgb(85, 105, 255);
        }
        }
`
);

const LoginIcons: React.FC = () => {
  return (
    <>
      {loginIconsData.map((item) => (
        <PaperWrapper
          key={item.id}
          sx={{
            width: `${item.size}px`,
            height: `${item.size}px`,
            top: `${item.top}px`,
            left: `${item.left}px`,
            right: `${item.right}px`,
            bottom: `${item.bottom}px`,
          }}
        >
          <img src={item.imageUrl} width={item.imgWidth} alt={item.atl} />
        </PaperWrapper>
      ))}
    </>
  );
};

export default LoginIcons;
