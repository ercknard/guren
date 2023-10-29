"use client";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import Image from "next/image";

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
      const res = await fetch("/api/nodemailer", {
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
    <section
      id="contact"
      className="contact-container"
      data-color="rgb(123, 143, 252)"
    >
      <div className="contact-container to-index to-width to-center to-height to-align">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:h-96 to-align">
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="title-email">
              <div className="text-motion section-title project-title to-tertiary">
                {" "}
                CONTACT US{" "}
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-anchor-placement="bottom-bottom"
              className="section-desc"
            >
              {" "}
              LETS TALK ABOUT YOUR PROJECT, Fill the form and send in your
              queries. We will respond as soon as we can.
              {/* Alternatively, You can
              reach out <span className="we-logo-sixth to-bold">Squid</span> by
              sending a message to{" "}
              <span className="we-logo-sixth to-bold">
                {" "}
                squid@cryptech.services{" "}
              </span>{" "}
              . */}
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="rounded-lg shadow-xl flex flex-col px-8 py-8 form-bg"
          >
            <h1 className="text-2xl font-bold dark:text-gray-50">
              Send us a message.
            </h1>

            <label
              htmlFor="fullname"
              className="text-gray-500 font-light mt-8 dark:text-gray-50"
            >
              Full Name
              <span className="text-red-500 dark:text-gray-50"> *</span>
            </label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value);
              }}
              name="fullname"
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-white font-light text-white-500"
            />
            {errors?.fullname && (
              <p className="text-red-500">Fullname cannot be empty.</p>
            )}

            <label
              htmlFor="email"
              className="text-gray-500 font-light mt-4 dark:text-gray-50"
            >
              E-mail<span className="text-red-500"> *</span>
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-white font-light text-black-500"
            />
            {errors?.email && (
              <p className="text-red-500">Email cannot be empty.</p>
            )}

            <label
              htmlFor="subject"
              className="text-gray-500 font-light mt-4 dark:text-gray-50"
            >
              Subject<span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-white font-light text-black-500"
            />
            {errors?.subject && (
              <p className="text-red-500">Subject cannot be empty.</p>
            )}
            <label
              htmlFor="message"
              className="text-white-500 font-light mt-4 dark:text-gray-50"
            >
              Message<span className="text-red-500"> *</span>
            </label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-white font-light text-white-500"
            ></textarea>
            {errors?.message && (
              <p className="text-red-500">Message body cannot be empty.</p>
            )}
            <div className="flex flex-row items-center justify-start">
              <button
                type="submit"
                // className="px-10 mt-8 py-2 bg-blue-500 text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
                className="project-button"
              >
                {buttonText}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className=" ml-2"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <SendIcon />
                </svg>
              </button>
            </div>
            <div className="text-left to-space-above">
              Alert message :{" "}
              <span>
                {showSuccessMessage && (
                  <p className="text-green-500 font-semibold text-sm my-2">
                    Thankyou! Your Message has been delivered.
                  </p>
                )}
                {showFailureMessage && (
                  <p className="text-red-500">
                    Oops! Something went wrong, please try again.
                  </p>
                )}
              </span>
            </div>
          </form>
        </div>
      </div>
      {/* <Image
        className="contact-land-pic bgs-sen"
        alt="front-logo"
        src="/images/lights-a.webp"
        width="3620"
        height="1671"
      /> */}
      <Image
        className="sales-1-land-pic contact-land-pic bgs-sen"
        alt="front-logo"
        src="/images/to-center-up.webp"
        width="3620"
        height="1377"
      />
    </section>
  );
}
