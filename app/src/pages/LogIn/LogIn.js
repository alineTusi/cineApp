import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import PopcornIcon from "../../assets/icons/popcorn.svg";
import { MainContainer, Logo, TitleContainer, InputContainer, SignInContainer, ModalContainer, ModalInput } from './Login.style.js';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ResponsiveAppBar from "../../components/NavBar/NavBar";
import UserLogin from "../../components/UserLginButton/UserLoginButton";

const validationSchema = yup.object({
  email: yup
    .string()
    .min(2, `Email too short!`)
    .max(255, `Email too long!`)
    .required("Email required!"),
  password: yup
    .string()
    .min(6, "Password too short!")
    .max(28, `Password too long!`)
    .required("Password required!"),
});

const LoginForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [emailExist, setEmailExist] = useState(false);
  const [passwordExist, setPasswordExist] = useState(false);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate("/register");
  };
  const handleModal = () => {
    setShowModal(!showModal);
  };

  // console.log(showModal);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: validationSchema,
    onSubmit: async (values, actions) => {
      const vals = { ...values };
      try {
        const response = await fetch("http://localhost:3004/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(vals),
        });
        if (response.status === 400) {
          setEmailExist(true);
        } else if (!response.ok || response.status === 401) {
          setError(await response.text());
          setPasswordExist(true);
        } else {
            setIsLoggedIn(true);
            setUser(vals.email);
           
        }
      } catch (error) {
        setError(error.message);
      }
      actions.resetForm();
    }
  });
  if (isLoggedIn) {
    navigate("/");
    
  }

  return (
    <MainContainer>
      <Logo>
        <img src={PopcornIcon} alt="popcorn" />
        <p>CineGAF</p>
      </Logo>
      <TitleContainer>
    
        <h1>Sign In</h1>
      </TitleContainer>
      <SignInContainer>
        <InputContainer
          onSubmit={formik.handleSubmit}
        >
          <TextField
            id="email"
            name="email"
            label={
              emailExist ? (
                <div
                  style={{
                    color: "yellow",
                    display: "flex",
                    marginBottom: "1em",
                  }}
                >
                  You provide wrong email!
                </div>
              ) : (
                "Email"
              )
            }
            type="email"
            placeholder="Email"
            mdnset
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            id="password"
            name="password"
            label={
              passwordExist ? (
                <div
                  style={{
                    color: "yellow",
                    display: "flex",
                    marginBottom: "1em",
                  }}
                >
                  You provide wrong password!
                </div>
              ) : (
                "Password"
              )
            }
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" id="register_submit" type="submit">
              Submit
            </Button>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Link onClick={handleModal}>Forgot password?</Link>
            <button onClick={navigateToRegister}>Create Account</button>
          </div>
        </InputContainer>
      </SignInContainer>
       {showModal ? 
        <ModalContainer>
            <ModalInput>
              <label>Email</label>
                <input placeholder="Email" type="email"></input>
                <button>Send</button>
                <button onClick={handleModal}>Close</button>
          </ModalInput>
        </ModalContainer> : ""}
        <UserLogin myemail={user} />
        {error ? <div></div> : null}
    </MainContainer>
  );
};

export default LoginForm;
