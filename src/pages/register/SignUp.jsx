import React from "react";
import "./signup.css";
import { Button } from "../../component/button/Button";
import {  useFormik } from "formik";
import { Link } from "react-router-dom";
import GoogleIcon from "../../assets/google icon.png";
import { signUpSchema } from "../../signup schemas";
const onSubmit = async(values, actions) => {
  console.log(values);
  console.log(actions);
  await Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};
const SignUp = () => {
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit,
  });

  console.log(errors);
  // console.log(Formik);
  return (
    <section className="signUpContainer">
      <div className="signUpLayout">
        <div className="signUpLeft">
          <div className="leftInfo">
            <div className="title">
              <h3>Welcome!</h3>
              <span>Welcome! Please kindly enter your details.</span>
            </div>
            <div className="formWrapper">
              <form onSubmit={handleSubmit} au="false">
                <div className="input">
                  <label for="name">Name</label>
                  <input
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Name"
                    className={errors.name && touched.name ? "input-error" : ""}
                    required
                  />
                </div>
                <div className="input">
                  <label for="email">Email</label>
                  <input
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="email"
                    placeholder="Enter your email"
                    className={errors.email && touched.email ? "input-error" : ""}
                    required
                  />
                </div>
                <div className="input">
                  <label for="password">Password</label>
                  <input
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="password"
                    placeholder="Password"
                    className={errors.password && touched.password ? "input-error" : ""}
                    required
                  />
                </div>
                <div className="ignUpBtn">
                  <Button desable={isSubmitting} url="/signin" text="Sign Up" />
                </div>
                <div className="orSignUpWith">
                  <button className="signUpWithBtn">
                    <img src={GoogleIcon} alt="" />
                    <span>Sign up with Google</span>
                  </button>
                </div>
              </form>
              <div className="alreadyHaveAcc">
                <p>
                  Already have an account? <Link to="/signin">Log in</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="signUpRight"></div>
      </div>
    </section>
  );
};
export default SignUp;
