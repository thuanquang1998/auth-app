import React from "react";
import LoginForm from "../LoginForm";

const Login = (props: any) => {
  const handleSubmit = async (values: any) => {
    console.log("Form Submit", values);
    // try {
    //     const action = login(values);
    //     const resultAction = await dispatch(action);
    //     const user = unwrapResult(resultAction);

    //     //close Dialog
    //     const {closeDialog} = props;
    //     if(closeDialog) {closeDialog()}

    //     //do something here on register successfully
    //     console.log("New user", user);
    // }catch (error) {
    //     console.log('Failed to login',error);
    //     enqueueSnackbar(error.message, {variant:'error'});
    //     // bỏ hàm reset form
    // }
  };
  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
