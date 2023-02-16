import React, { useState} from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { MainRegisterContainer, Logo, RegisterTitle,InputFormContainer } from "./Register.style"
import "./Register.css";
import PopcornIcon from "../../assets/icons/popcorn.svg"
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom';



          const validationSchema = yup.object({
          gender: yup.string().required("Gender required!").min(1, "Gender is too short").max(28, "Gender is too long"),
          fname: yup.string().min(2, `First name too short!`).max(255, `First name too long!`).required("First name required!"),
          lname: yup.string().min(2, `Last name too short!`).max(255, `Last name too long!`).required("Last name required!"),
          username: yup.string().min(2, `Username too short!`).max(255, `Username too long!`).required("Username required!"),
          phoneNumber: yup.string().required("Phone required!").min(6, "Phone contact too short!").max(28, `Phone contact too long!`),
          email: yup.string().min(2, `Email too short!`).max(255, `Email too long!`).required("Email required!"),
          repeatEmail: yup.string().min(6, "Repeat email too short!").max(255, `Repeat email too long!`).required("Repeat email required!"),
          password: yup.string().min(6, "Password too short!").max(28, `Password too long!`).required("Password required!"),
          repeatPassword: yup.string().min(6, "Password repeat too short!").max(28, `Password repeat too long!`).required("Password repeat required!"),
          date: yup.string().required("Date required"),
          photo: yup.string().required("Please upload photo"),
          terms: yup.boolean().required("Please check box")

          }); 

          const Register = () => {
          const [emailExists, setEmailExists] = useState(false);
          const [password, setPassword] = useState(true)
          const [error, setError] = useState(null);
          const [email, setEmail] = useState(true)

          const recaptchaRef = React.createRef();
          const navigate = useNavigate()

          const formik = useFormik({
          initialValues: { gender: "",fname: "", lname:"", 
          username: "", phoneNumber:"", email: "", repeatEmail: "",
          password: "", repeatPassword: "", date: "", photo: "", terms: false
          },
          validationSchema: validationSchema,
          onSubmit: async (values, actions) => {
          const vals= {...values}

          if(vals.email !== vals.repeatEmail || vals.password !== vals.repeatPassword) {
              setEmail(!email)
              setPassword(!password)
              
            }  else {
       
          try {
            const response = await fetch("https://app-15d2875f-7563-4baf-864b-3beec4034cb4.cleverapps.io/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(vals),
            });
            if (response.status === 400) {
              setEmailExists(true);
            } else if (!response.ok) {
              setError(await response.text());
            } else {

              navigate('/SignIn')

            }
          } catch (error) {
            setError(error.message);
          } 
          actions.resetForm()
          const recaptchaValue = recaptchaRef.current.getValue();
          this.props.onSubmit(recaptchaValue);

          }
          }})

          const onChange = () => {
          console.log('Captcha');
          }
          return (
          <MainRegisterContainer>
          <Logo>
              <img src={PopcornIcon} alt="popcorn"/>
              <p>CineGAF</p>
          </Logo>
          <RegisterTitle>
              <h1>Register Form</h1>
          </RegisterTitle>
          <InputFormContainer>
              <form id="register-form" onSubmit={formik.handleSubmit} encType="multipart/form-data">
                  <div style={{display:"flex", flexDirection:"column"}}>
                  <label htmlFor="gender" id="label-gender">Select Gender*</label>
                            <select name="gender" id="gender" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.gender} required>
                                <option value="">Select Gender</option>
                                <option value="Mr">Mr</option>
                                <option value="Miss">Miss</option>
                              </select>
                              </div>
                  
                      <TextField
                      id="fname"
                      name="fname"
                      label="First name"
                      value={formik.values.fname}
                      onChange={formik.handleChange}
                      error={formik.touched.fname && Boolean(formik.errors.fname)}
                      helperText={formik.touched.fname && formik.errors.fname}
                      />
                    <TextField
                      id="repeatEmail"
                      name="repeatEmail"
                      label={!email ? <div style={{color: "yellow", display: "flex", marginBottom:"1em"}}>Email is not match!</div> : "Repeat email"}
                      type="email"
                      placeholder='Repeat email'
                      value={formik.values.repeatEmail}
                      onChange={formik.handleChange}
                      error={formik.touched.repeatEmail && Boolean(formik.errors.repeatEmail)}
                      helperText={formik.touched.repeatEmail && formik.errors.repeatEmail}
                      />
                      <TextField
                      id="lname"
                      name="lname"
                      label="Last name"
                      placeholder='Last name'
                      value={formik.values.lname}
                      onChange={formik.handleChange}
                      error={formik.touched.lname && Boolean(formik.errors.lname)}
                      helperText={formik.touched.lname && formik.errors.lname}
            
                      />
                      <TextField
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      placeholder='Password'
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      error={formik.touched.password && Boolean(formik.errors.password)}
                      helperText={formik.touched.password && formik.errors.password}
                      />
                    <TextField
                      id="username"
                      name="username"
                      label="Username"
                      placeholder='Username'
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      error={formik.touched.username && Boolean(formik.errors.username)}
                      helperText={formik.touched.username && formik.errors.username}
              
                      />
                      <TextField
                      id="repeatPassword"
                      name="repeatPassword"
                      label={!password ? <div style={{color: "yellow", display: "flex", marginBottom:"1em"}}>Password is not match!</div> : "Repeat password"}
                      type="password"
                      placeholder='Repeat password'
                      value={formik.values.repeatPassword}
                      onChange={formik.handleChange}
                      error={formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword)}
                      helperText={formik.touched.repeatPassword && formik.errors.repeatPassword}
                      />
                        <TextField
                      id="email"
                      name="email"
                      label={emailExists ? <div style={{color: "yellow", display: "flex", marginBottom:"1em"}}>Email is already used!</div> : "Email"}
                      type="email"
                      placeholder='Email'
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                      />
                    <TextField
                      id="phoneNumber"
                      name="phoneNumber"
                      label="Phone number*"
                      type="phone"
                      placeholder='Phone number'
                      value={formik.values.phoneNumber}
                      onChange={formik.handleChange}
                      error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                      helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                
                      />
                      <TextField
                      label="Upload picture*"
                      type='file' name='photo' accept='image/*'
                      onChange={(e) =>
                        formik.setFieldValue('photo', e.currentTarget.files[0])
                      }
                      id="file"
                      />
                      <TextField
                      id="date"
                      name="date"
                      label="Date of birth*"
                      type="date"
                      placeholder='Date of birth'
                      value={formik.values.date}
                      onChange={formik.handleChange}
                      error={formik.touched.date && Boolean(formik.errors.date)}
                      helperText={formik.touched.date && formik.errors.date}
                      />
                      <div style={{display: "flex", flexDirection: "column"}}> 
                          <label id="terms"> Terms and Conditions*</label> 
                      <div style={{display: "flex", flexDirection: "row", color: "white", marginTop:"1em"}}>
                          <input 
                          id="terms-input"
                          name="terms"
                          type="checkbox"
                          value={formik.values.terms}
                          onChange={formik.handleChange}
                
                          />
                          <span id='terms-span'>I accept</span><a href="https://flaviufllaviu-terms.mynotice.io/" id="terms-link">Terms and Conditions</a>
                      </div>
                      </div>
                      <div style={{display: "flex", justifyContent: "center", marginTop:"1em"}}>
                        <ReCAPTCHA onChange={onChange}
                        ref={recaptchaRef}
                        sitekey="6LcGzk0kAAAAALJKkcKubxwTbH-F9KAmvPHB-6aP"
                         />
                      </div>
                    
                      <div style={{display: "flex", justifyContent: "center"}}>
                      <Button  variant="contained" id='register_submit' type="submit">
                          Submit
                          </Button>
                      </div>
                </form>
          </InputFormContainer>
          {error ? <div></div> : ""}
        </MainRegisterContainer>
          )}

  export default Register
