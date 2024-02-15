// SignInPage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [backendError, setBackendError] = useState("");

  const onSubmit = async (data, event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://13.233.141.139:8080/LoginProject-0.0.1-SNAPSHOT/user/login",
        data
      );
      console.log("Login successful:", response.data);
      // Handle successful login (redirect user, set state, etc.)
    } catch (error) {
      if (error.response.status === 401) {
        setBackendError("Password does not match.");
      } else {
        console.error("Login error:", error.response.data);
      }
    }
    console.log(data);
    console.log(event);
    reset();
  };

  return (
    <Container
      style={{
        maxWidth: "none",
        background: "linear-gradient(45deg, #fff1eb 30%, #ace0f9 90%)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="signin-container">
        <h2>Sign in to your account</h2>
        <form onSubmit={handleSubmit(onSubmit)} method="post">
          <div className="input-container">
            <label htmlFor="userName">Email</label>
            <input
              type="email"
              id="userName"
              name="userName"
              {...register("userName", {
                required: "Email id is required.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {/* /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i */}
            {errors && errors.userName && (
              <p className="error-message text-danger mb-2">
                {errors.userName.message}
              </p>
            )}
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
            />
            {errors && errors.password && (
              <p className="error-message text-danger font-size-base * 1.25">
                {errors.password.message}
              </p>
            )}
            {backendError && (
              <p className="error-message text-danger font-size-base">
                {backendError}
              </p>
            )}
          </div>
          <button
            className="login-button"
            style={{ backgroundColor: "#0E4DCB" }}
            type="submit"
          >
            Login
          </button>
        </form>
        <div
          className="register-link"
          style={{ textDecoration: "none", marginTop: "20px" }}
        >
          New to Annular? <Link to="/registerUser">Register</Link>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
