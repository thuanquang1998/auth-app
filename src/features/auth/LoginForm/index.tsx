import { yupResolver } from "@hookform/resolvers/yup";
import { makeStyles } from "@mui/styles";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import LockIcon from "@mui/icons-material/Lock";
import React from "react";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import * as yup from "yup";

const useStyles = makeStyles((theme: any) => ({
  root: {
    paddingTop: useTheme().spacing(4),
    position: "relative",
  },
  avatar: {
    margin: "0 auto",
    backgroundColor: useTheme().palette.secondary.main,
  },
  title: {
    textAlign: "center",
    margin: useTheme().spacing(2, 0, 3, 0), //top - right - bottom - left
  },
  submit: {
    margin: useTheme().spacing(3, 0, 2, 0),
  },
  progress: {
    position: "absolute",
    top: useTheme().spacing(1),
    left: 0,
    right: 0,
  },

  inputField: {
    width: "100%",
    margin: "20px 0 0 0",
  },
}));

interface IFormInput {
  username: string;
  password: string;
}

const LoginForm = (props: any) => {
  const classes = useStyles();

  // Put schema at hear to use multi languages
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Please Enter your Email")
      .email("Please Enter a valid email address"),
    password: yup.string().required("Please Enter your Password"),
  });

  const form = useForm<IFormInput>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const { control, handleSubmit, reset } = form;

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("llll ", data);

    form.reset();
  };

  const { isSubmitting } = form.formState;

  console.log("isSubmitting :>> ", isSubmitting);

  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}
      <Avatar className={classes.avatar}>
        <LockIcon></LockIcon>
      </Avatar>

      <Typography component="h3" variant="h5" className={classes.title}>
        Sign in
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="username"
          control={control}
          render={({ field, fieldState }) => {
            return (
              <TextField
                error={!!fieldState.error}
                id="outlined-basic"
                label="Username"
                variant="outlined"
                {...field}
                className={classes.inputField}
                helperText={fieldState.error ? fieldState.error.message : ""}
              />
            );
          }}
        />
        <FormControl
          sx={{ m: 1, width: "25ch" }}
          variant="outlined"
          className={classes.inputField}
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>

          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={"password"}
                  {...field}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        // onClick={handleClickShowPassword}
                        // onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {/* {values.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )} */}
                        <VisibilityOff />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              );
            }}
          />
        </FormControl>

        <Button
          // disabled={true}
          type="submit"
          className={classes.submit}
          variant="contained"
          color="primary"
          fullWidth
          size="large"
        >
          Sign in
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
