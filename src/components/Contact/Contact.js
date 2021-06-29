import React from "react";
import classes from "./Contact.module.css";
import { useForm, ValidationError } from "@formspree/react";
import { useHistory } from "react-router-dom";

const Contact = () => {
  const [state, handleSubmit] = useForm("mzbyvdoo");
  if (state.succeeded) {
    setTimeout(() => {
      window.location.reload();
    }, 3000);
    return (
      <React.Fragment>
        <div className={classes.Contact}>
          <div className={classes.Container}>
            <div className={classes.Title}>
              <h1>Let's Talk</h1>
            </div>
            <div className={classes.InsideContact}>
              <div className={classes.InsideForm}>
                <form
                  action="https://formspree.io/f/mzbyvdoo"
                  onSubmit={handleSubmit}
                  method="POST"
                >
                  <input
                    id="text"
                    type="text"
                    name="text"
                    placeholder="Full Name"
                    required
                    value=""
                  ></input>
                  <ValidationError
                    prefix="text"
                    field="text"
                    errors={state.errors}
                  />

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value=""
                    placeholder="Email Address"
                    required
                  ></input>
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                  <textarea
                    value=""
                    id="message"
                    name="message"
                    required
                    placeholder="Message"
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                  <button disabled={state.submitting} type="submit">
                    Submit
                  </button>
                </form>
              </div>
              <div className={classes.Message}>
                <p>
                  Your message has been successfully sent and forwarded to us.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <div className={classes.Contact}>
        <div className={classes.Container}>
          <div className={classes.Title}>
            <h1>Let's Talk</h1>
          </div>
          <div className={classes.InsideContact}>
            <div className={classes.InsideForm}>
              <form
                action="https://formspree.io/f/mzbyvdoo"
                onSubmit={handleSubmit}
                method="POST"
              >
                <input
                  id="text"
                  type="text"
                  name="text"
                  placeholder="Full Name"
                  required
                ></input>
                <ValidationError
                  prefix="text"
                  field="text"
                  errors={state.errors}
                />

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                ></input>
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Message"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <button disabled={state.submitting} type="submit">
                  Submit
                </button>
              </form>
            </div>
            <div className={classes.Message}>
              <p>
                I’d love to hear from you and show you more of my work! Just
                fill out the form and I will get back to you as soon as I can.
                If you want to reach out to me, feel free to do so.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
