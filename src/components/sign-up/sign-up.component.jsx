import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { SignUpContainer, SignUpTitle } from "./sign-up.styles";
import AuthService from "../../services/auth.service";

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    successful: false,
    message: ""
  });

  const { userName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    AuthService.register(userName, email, password).then(
      response => {
        setUserCredentials({
          message: response.data.message,
          successful: true
        });
        AuthService.login(userName, password);
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
          email: email,
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
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have a account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="userName"
          value={userName}
          onChange={handleChange}
          label="User name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;
