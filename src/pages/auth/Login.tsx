import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

import {
  Grid,
  Box,
  Typography,
  Container,
  Card,
  FormControl,
  Checkbox,
  TextField,
  Button,
  InputLabel,
} from "../../components/index";
import { authSliceActions } from "src/slices/auth";

import { useAppDispatch } from "src/types/redux";
import imgLogin from "src/assets/img/imgLogin.png";

type FormValues = {
  email: string;
  password: string;
  termCheck: boolean;
};

const defaultValues = {
  email: "",
  password: "",
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues });

  console.log(errors);
  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(data);
    dispatch(authSliceActions.login(data.email));
    navigate("/job");
  };

  return (
    <Grid container spacing={0} className="auth__login__container">
      <Grid
        lg={4}
        sx={{ display: { xs: "none", md: "none", lg: "block" } }}
        className="auth__login__paperwall"
      >
        <Box className="auth__login__paperwallContainer">
          <Typography
            variant="h4"
            component="h4"
            mb={5}
            sx={{ fontWeight: "bold" }}
          >
            Multiple auth <br /> methods included
          </Typography>
          <Box
            component="img"
            sx={{
              height: 150,
              width: 400,
            }}
            alt="imgLogin"
            src={imgLogin}
          />
          <Typography mt={5} mb={5}>
            Choose between JSON Web Token, Firebase, AWS Amplify or Auth0.
            Regular login/register functionality is also available. Want to
            switch auth methods?
          </Typography>
          <Typography variant="h6">Want to switch auth methods?</Typography>
          <Typography>
            It only takes seconds. There is a documentation section showing how
            to do exactly that. Read docs
          </Typography>
        </Box>
      </Grid>
      <Grid
        xs={12}
        md={12}
        lg={8}
        component={Grid}
        className="auth__login__login"
      >
        <Container className="auth__login__loginCardContainer" maxWidth="sm">
          <Card className="auth__login__loginCard custom-paper-elevation">
            <Box className="auth__login__loginCardTitle">
              <Typography
                variant="h4"
                component="h4"
                mb={1}
                sx={{ fontWeight: "bold" }}
              >
                Sign in
              </Typography>
              <Typography component="h6" mb={5}>
                Fill in the fields below to sign into your account.
              </Typography>
            </Box>
            <form
              className="auth__login__loginCardForm"
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormControl className="auth__login__loginCardFormControl">
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
                      <TextField
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
              </FormControl>
              <FormControl className="auth__login__loginCardFormControl">
                <Controller
                  rules={{
                    required: "This is field required",
                  }}
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <>
                      <TextField
                        {...field}
                        id="auth__password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        className="auth__login__loginCardFormInput"
                        error={errors.password ? true : false}
                        helperText={errors.password && "This field is required"}
                      />
                    </>
                  )}
                />
              </FormControl>
              <FormControl className="auth__login__loginCardFormControl  ">
                <Box className="auth__login__checkboxGroup">
                  <Controller
                    rules={{
                      required: "You must agree to our terms and conditions",
                    }}
                    name="termCheck"
                    control={control}
                    render={({ field }) => (
                      <>
                        <Checkbox
                          {...field}
                          className="auth__login__checkbox"
                          id="auth__login__checkbox"
                        />
                      </>
                    )}
                  />
                  <label htmlFor="auth__login__checkbox">
                    <Typography>I accept the terms and conditions.</Typography>
                  </label>
                </Box>
                {/* <Typography>Lost Password?</Typography> */}
                {errors.termCheck && (
                  <span style={{ color: "red" }}>
                    {errors.termCheck.message}
                  </span>
                )}
              </FormControl>
              <FormControl className="auth__login__loginCardFormControl ">
                <Button variant="contained" type="submit" className="auth__login__loginBtn">
                  Sign in
                </Button>
              </FormControl>
            </form>
            {/* <Box>
              <Typography>Don’t have an account, yet?</Typography>
              <Typography>Sign up here</Typography>
            </Box> */}
          </Card>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Login;
