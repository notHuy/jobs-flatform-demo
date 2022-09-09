import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

import {
  Box,
  Typography,
  FormControl,
  Checkbox,
  TextField,
  Button,
  Paper,
  Container,
  Link,
} from "../../components/index";
import { authSliceActions } from "src/slices/auth";
import { useAppDispatch } from "src/types/redux";
import LoginIcon from "src/components/LoginIcon";

type FormValues = {
  email: string;
  password: string;
  termCheck: boolean;
};

const defaultValues = {
  email: "",
  password: "",
};

const FormControlWrapper = styled(FormControl)(
  () => `
  .MuiFormHelperText-root.Mui-error {
      font-weight: bold;
      color: rgb(255, 25, 67);
    }
  }
`
);

const TextFieldWrapper = styled(TextField)`
  & label.Mui-focused {
    color: rgb(85, 105, 255);
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: rgb(85, 105, 255);
    }
  }
`;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues });

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    dispatch(authSliceActions.login(data.email));
    navigate("/job");
  };

  return (
    <Box className="auth__login__container">
      <Box className="auth__sideBar__container">
        <div className="auth__sideBar__wrap">
          <div className="auth__sideBar__cover">
            <Box className="auth__sideBar__mainContent">
              <Box className="auth__sideBar__content">
                <Typography className="auth__sideBar__title">
                  Multiple auth methods included
                </Typography>
                <Box className="auth__sideBar__icons">
                  <LoginIcon />
                </Box>
                <Typography
                  className="auth__sideBar__subTitle1"
                  sx={{
                    marginTop: "27px",
                    marginBottom: "27px",
                    lineHeight: "1.75",
                    fontSize: "14px",
                  }}
                >
                  Choose between JSON Web Token, Firebase, AWS Amplify or Auth0.
                  Regular login/register functionality is also available.
                </Typography>
                <Typography
                  sx={{
                    lineHeight: "1.75",
                    fontSize: "14px",
                    color: "rgb(34, 51, 84)",
                    fontWeight: "700",
                  }}
                >
                  Want to switch auth methods?
                </Typography>{" "}
                <Typography
                  className="auth__sideBar__subTitle1"
                  sx={{
                    lineHeight: "1.75",
                    fontSize: "14px",
                  }}
                >
                  It only takes seconds. There is a documentation section
                  showing how to do exactly that.{" "}
                  <Link
                    underline="hover"
                    sx={{ cursor: "pointer", color: "rgb(85, 105, 255)" }}
                  >
                    Read docs
                  </Link>
                </Typography>
              </Box>
            </Box>
          </div>
        </div>
      </Box>
      <Box className="auth__mainContent__container">
        <Container className="auth__mainContent__wrap" maxWidth="sm">
          <Paper
            square={false}
            elevation={1}
            className="auth__mainContent__paper custom-paper-elevation"
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography className="auth__mainContent__titleMain">
                Sign in
              </Typography>
              <Typography className="auth__mainContent__titleDes">
                Fill in the fields below to sign into your account.
              </Typography>
              <form
                className="auth__login__loginCardForm"
                onSubmit={handleSubmit(onSubmit)}
              >
                <FormControlWrapper className="auth__login__loginCardFormControl">
                  <Controller
                    rules={{
                      required: "This is field required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    }}
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <>
                        <TextFieldWrapper
                          {...field}
                          id="auth__email"
                          label="Email Address"
                          variant="outlined"
                          className="auth__login__loginCardFormInput"
                          error={errors.email ? true : false}
                          helperText={errors.email && errors.email.message}
                        />
                      </>
                    )}
                  />
                </FormControlWrapper>
                <FormControlWrapper className="auth__login__loginCardFormControl">
                  <Controller
                    rules={{
                      required: "This is field required",
                    }}
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <>
                        <TextFieldWrapper
                          {...field}
                          id="auth__password"
                          label="Password"
                          type="password"
                          variant="outlined"
                          className="auth__login__loginCardFormInput"
                          error={errors.password ? true : false}
                          helperText={
                            errors.password && "The password field is required"
                          }
                        />
                      </>
                    )}
                  />
                </FormControlWrapper>
                <FormControlWrapper className="auth__login__loginCardFormControl auth__login__loginCardFormControlCheckBox">
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: " space-between",
                    }}
                  >
                    <Box className="auth__login__checkboxGroup">
                      <Controller
                        rules={{
                          required:
                            "You must agree to our terms and conditions",
                        }}
                        name="termCheck"
                        control={control}
                        render={({ field }) => (
                          <>
                            <Checkbox
                              {...field}
                              checked={field.value}
                              className="auth__login__checkbox"
                              id="auth__login__checkbox"
                            />
                          </>
                        )}
                      />
                      <label
                        htmlFor="auth__login__checkbox"
                        className="auth__login__checkboxLabel"
                      >
                        <Typography sx={{ fontSize: "14px" }}>
                          I accept the <a href="/"> terms and conditions</a>
                        </Typography>
                      </label>{" "}
                    </Box>
                    <Link
                      href="#"
                      className="auth__login__lostPassword"
                      underline="hover"
                    >
                      Lost Password?
                    </Link>
                  </Box>
                  {errors.termCheck && (
                    <Typography className="checkBox-errorMessage">
                      {errors.termCheck.message}
                    </Typography>
                  )}
                </FormControlWrapper>
                <FormControl className="auth__login__loginCardFormControl ">
                  <Button
                    variant="contained"
                    type="submit"
                    className="auth__login__loginBtn"
                  >
                    Sign in
                  </Button>
                </FormControl>
              </form>
              <Box
                className="auth__login__loginAccountSignUp"
                sx={{ fontWeight: "700" }}
              >
                <span>Don’t have an account, yet?</span>{" "}
                <Link
                  href="#"
                  className="auth__login__signUp"
                  underline="hover"
                >
                  Sign up here
                </Link>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default Login;
