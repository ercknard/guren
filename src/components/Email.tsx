"use client";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

export default function ContactUs() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation
  const [errors, setErrors] = useState({} as any);

  //   Setting button text
  const [buttonText, setButtonText] = useState("Send");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors: any = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      setFullname("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
    console.log(fullname, email, subject, message);
  };
  return (
    <div className="normal-text">
      <span>
        &quot;Thank you for visiting my{" "}
        <span className="text-effect">Web Portfolio</span>. I&apos;m excited to
        hear from you and discuss how we can work together to bring your ideas
        to life. Got any inquries? Please don&apos;t hesitate to get in touch by
        filling out the form below.&quot;
      </span>
      <div
        data-aos="fade-up"
        data-aos-duration="1200"
        className="to-cover-pages"
      >
        <div>
          <form className="forms-contact" onSubmit={handleSubmit}>
            {errors?.fullname && (
              <p className="text-red-500 text-lg absolute to-flick">
                Fullname cannot be empty.
              </p>
            )}
            <TextField
              data-aos="fade-left"
              data-aos-duration="500"
              id="standard-basic"
              helperText="Please enter your name"
              label="Full Name"
              variant="standard"
              type="text"
              name="fullname"
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value);
              }}
            />
            <br />
            {errors?.email && (
              <p className="text-red-500 text-lg absolute to-flick">
                Email cannot be empty.
              </p>
            )}
            <TextField
              data-aos="fade-left"
              data-aos-duration="700"
              id="standard-basic"
              helperText="Please enter your E-mail Address"
              label="E-mail"
              variant="standard"
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            {errors?.subject && (
              <p className="text-red-500 text-lg absolute to-flick">
                Subject cannot be empty.
              </p>
            )}
            <TextField
              data-aos="fade-left"
              data-aos-duration="900"
              id="standard-basic"
              helperText="Please enter message subject"
              label="Subject"
              variant="standard"
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
            <br />
            {errors?.message && (
              <p className="text-red-500 text-lg absolute to-flick">
                Message body cannot be empty.
              </p>
            )}
            <TextField
              data-aos="fade-left"
              data-aos-duration="1100"
              id="standard-basic"
              helperText="Type in your message"
              label="Message"
              variant="standard"
              type="text"
              name="message"
              multiline
              rows={4}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <div
              data-aos="fade-left"
              data-aos-duration="1300"
              className="flex to-notif"
            >
              <button type="submit" className="project-button">
                <span> {buttonText} </span> <SendIcon className="send-icon" />
              </button>
              <div className="text-lg text-center">
                {/* Alert message :{" "} */}
                <span>
                  {showSuccessMessage && (
                    <p className="text-green-500 font-semibold text-sm my-2">
                      Thankyou! Your Message has been delivered.
                    </p>
                  )}
                  {showFailureMessage && (
                    <p className="text-red-500 font-semibold text-sm my-2">
                      Oops! Something went wrong, please try again.
                    </p>
                  )}
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
