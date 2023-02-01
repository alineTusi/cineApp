import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PopcornIcon from "../../assets/icons/popcorn.svg"
import { MainContainer, Logo, TitleContainer, InputContainer, SignInContainer, ModalContainer, ModalInput } from './LogIn.style';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// 1. You need to add additional columns to your existed table 'users'
// 2. Image will data type Varchar, will be saved name of the image
// 3. Fetch/POST
// 4. Router for registration

const validationSchema = yup.object({
    email: yup.string().min(2, `Email too short!`).max(255, `Email too long!`).required("Email required!"),
    password: yup.string().min(6, "Password too short!").max(28, `Password too long!`).required("Password required!"),

}); 

const LoginForm = () => {
    
    const [showModal, setShowModal] = useState(false)
    const navigate = useNavigate();

    const navigateToRegister = () => {
        navigate('/register')
    }
    const handleModal = ()=> {
        setShowModal(!showModal)
    }



    console.log(showModal)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
          },

        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            actions.resetForm()
            const vals= {...values}
            fetch("http://localhost:3004/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(vals)
            }).catch(err => {
                return;
            }).then(res => {
                if (!res || !res.ok || res.status >= 400)  {
                    return;
                }
                return res.json()
            }).then(data => { 
                if(!data) return
                console.log(data)
            })

          console.log(JSON.stringify(values, null, 3));
        },
      });

  return (
    <MainContainer>
         <Logo>
            <img src={PopcornIcon} alt="popcorn"/>
            <p>CineGAF</p>
        </Logo>
        <TitleContainer>
            <h1>Sign In</h1>
        </TitleContainer>
        <SignInContainer>
            <InputContainer onSubmit={formik.handleSubmit} encType="multipart/form-data">
                 <TextField
                id="email"
                name="email"
                label="Email"
                type="email"
                placeholder='Email'
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
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
                <div style={{display: "flex", justifyContent: "center"}}>
                 <Button  variant="contained" id='register_submit' type="submit">
                    Submit
                    </Button>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                <Link onClick={handleModal}>Forgot password?</Link>
                <button onClick={navigateToRegister}>Create Account</button>
                </div>
      </InputContainer>
    </SignInContainer>
        {showModal ? 
        <ModalContainer>
            <ModalInput>
                <input placeholder="Email" type="email"></input>
                <button>Send</button>
                <button onClick={handleModal}>Close</button>
          </ModalInput>
        </ModalContainer> : ""}
    </MainContainer>
  );
};

export default LoginForm