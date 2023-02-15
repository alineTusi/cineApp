import React from "react";
import PopCornPic from "../../assets/icons/CinemaPopcorn.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  EmailButton,
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

      fetch(
        "https://app-15d2875f-7563-4baf-864b-3beec4034cb4.cleverapps.io/username",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, user_email, user_message }),
        }
      )
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
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
          <EmailButton>
            <div onSubmit={submitHandler} type="submit">
              Send Email
            </div>
          </EmailButton>
        </Form>
      </SendEmail>
      <Photo>
        <PopCorn src={PopCornPic} alt="CornPic" />
      </Photo>
    </FormContact>
  );
};

export default ContactEmail;
