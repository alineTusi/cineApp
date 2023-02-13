import React from "react";
import PopCornPic from "../../assets/icons/CinemaPopcorn.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState } from "react";

import {
  FormContact,
  SendEmail,
  Deskription,
  ContactForm,
  SendAnEmail,
  Line,
  Form,
  FormName,
  SetUserName,
  Name,
  StarName,
  UserName,
  FormEmail,
  SetUserEmail,
  Email,
  StarEmail,
  UserEmail,
  TextArea,
  MessageArea,
  Mesage,
  StarMessage,
  PopCorn,
  SendEmailButton,
  Photo,
} from "./ContactForm.style";

const ContactEmail = () => {
  const [user_email, setUser_Email] = useState("");
  const [username, setUserName] = useState("");
  const [user_message, setUserMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!username || !user_email || !user_message) {
      return toast.error("Please fill name, email and message");
    } else {
      toast.success("The message was send successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      axios
        .post("http://localhost:5500/user")
        .then((res) => {
          setUser_Email(res.body);
          setUserName(res.body);
          setUserMessage(res.data.content);
        })
        .catch((err) => {});
      console.log(username);
      console.log(user_email);
      console.log(user_message);
    }
  };

  return (
    <FormContact>
      <ToastContainer position="top-center" limit={1} />

      <SendEmail>
        <Deskription>
          <ContactForm>Contact Form</ContactForm>
          <SendAnEmail>Send an Email</SendAnEmail>
          <Line></Line>
        </Deskription>

        <Form onSubmit={submitHandler}>
          <FormName>
            <Name htmlFor="Name">Name</Name>

            <StarName>*</StarName>

            <UserName>
              <SetUserName onChange={(e) => setUserName(e.target.value)} />
            </UserName>
          </FormName>

          <FormEmail>
            <Email htmlFor="email">Email</Email>

            <StarEmail>*</StarEmail>

            <UserEmail>
              <SetUserEmail
                id="subject"
                type="email"
                onChange={(e) => setUser_Email(e.target.value)}
              />
            </UserEmail>
          </FormEmail>

          {/*TEXT AREA*/}

          <MessageArea>
            <Mesage htmlFor="message">Message</Mesage>

            <StarMessage>*</StarMessage>

            <TextArea
              id="message"
              onChange={(e) => setUserMessage(e.target.value)}
              rows="10"
              cols="57"
            ></TextArea>
          </MessageArea>

          <SendEmailButton
            onSubmit={submitHandler}
            style={{ width: "12%", height: "40px" }}
            type="submit"
          >
            Send Email
          </SendEmailButton>
        </Form>
      </SendEmail>
      <Photo>
        <PopCorn src={PopCornPic} alt="CornPic" />
      </Photo>
    </FormContact>
  );
};

export default ContactEmail;
