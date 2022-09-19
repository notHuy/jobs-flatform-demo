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
  Dialog,
} from "src/components";
import { SearchIcon } from "src/components/Icon";
import { TransitionDialog } from "src/components/TransitionDialog";

type FormValues = {
  input: string;
};

interface MegaMenuProps {
  id: string | undefined;
  handleClose: () => void;
  open: boolean;
}

const Search: React.FC<MegaMenuProps> = ({
  handleClose,
  open,
  id,
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
    <Dialog
      open={open}
      TransitionComponent={TransitionDialog}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      className="header__menuGroup__search__searchDialog"
      PaperProps={{ className: "header__menuGroup__search__searchPaper" }}
    >
      <Box className="header__menuGroup__search__inputContainer">
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          elevation={0}
          className="header__menuGroup__search__inputPaper"
        >
          <IconButton
            aria-label="menu"
            className="header__menuGroup__search__inputSearchIcon"
          >
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
    </Dialog>
  );
};

export default Search;
