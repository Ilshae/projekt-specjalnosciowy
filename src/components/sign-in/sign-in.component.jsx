import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from "./sign-in.styles";
import AuthService from "../../services/auth.service";

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    userName: "",
    password: "",
    loading: false,
    message: ""
  });

  const { userName, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    setUserCredentials({
      message: "",
      loading: true
    });

    AuthService.login(userName, password).then(
      () => {
        window.location.href = "http://localhost:3000";
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setUserCredentials({
          userName: userName,
          password: "",
          confirmPassword: "",
          successful: false,
          message: resMessage
        });
        alert(resMessage);
      }
    );
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your userName and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="userName"
          type="userName"
          handleChange={handleChange}
          value={userName}
          label="userName"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit"> Sign in </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
