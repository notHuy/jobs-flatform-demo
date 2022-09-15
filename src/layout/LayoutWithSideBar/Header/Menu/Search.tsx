import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

import SearchMenu from "./SearchMenu";
import SearchStartMenu from "./SearchStartMenu";

import {
  Box,
  Popover,
  Typography,
  Paper,
  IconButton,
  InputBase,
  Divider,
} from "src/components";
import { SearchIcon } from "src/components/Icon";

type FormValues = {
  input: string;
};

interface MegaMenuProps {
  id: string | undefined;
  anchorElDashboard: Element | ((element: Element) => Element) | null;
  handleClose: () => void;
  open: boolean;
}

const Search: React.FC<MegaMenuProps> = ({
  handleClose,
  open,
  id,
  anchorElDashboard,
}: MegaMenuProps) => {
  const defaultValues = {
    input: "",
  };
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues });

  const [textInput, setTextInput] = useState("");

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(data);
  };
  const onChangeFirst = (value: string) => setTextInput(value);
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
        ".MuiBackdrop-invisible": {
          backdropFilter: "blur(2px)",
          backgroundColor: "rgba(0, 0, 0, 0.001)",
          borderRadius: "1rem",
        },
      }}
      className="header__menuGroup__search__searchPopover"
      PaperProps={{ className: "header__menuGroup__search__searchPaper" }}
    >
      <Box className="header__menuGroup__search__inputContainer">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
          }}
          elevation={0}
          className="header__menuGroup__search__inputPaper"
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <SearchIcon />
          </IconButton>
          <Controller
            name="input"
            control={control}
            render={({ field }) => (
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                inputProps={{ "aria-label": "searchInput" }}
                className="header__menuGroup__search__inputBase"
                placeholder="Search terms here..."
                {...field}
                onChange={(e) => {
                  onChangeFirst(e.target.value);
                  field.onChange(e);
                }}
              />
            )}
          />

          <Paper
            square={false}
            className="header__menuGroup__search__inputEscBtn"
          >
            <Typography className="header__menuGroup__search__inputEscBtnText">
              esc
            </Typography>
          </Paper>
        </Paper>
      </Box>
      <Divider />
      {/* <Box className="header__menuGroup__search__result"> */}
      {/* <Box className="header__menuGroup__search__resultWrap">
          <Box className="header__menuGroup__search__resultContainer"> */}
      {!textInput ? <SearchStartMenu /> : <SearchMenu />}
      {/* <SearchMenu /> */}
      {/* </Box>
        </Box> */}
      {/* </Box> */}
    </Popover>
  );
};

export default Search;
