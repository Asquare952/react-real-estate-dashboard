import  "./signin.css"
import GoogleIcon from "../../assets/google icon.png";
import { Button } from "../../component/button/Button";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { SignInSchema } from "../../signinSchema";

const onSubmit = () => {
  console.log("submitted");
};

const SignIn = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: SignInSchema,
      onSubmit,
    });
  return (
    <>
      <section className="signInContainer">
        <div className="signInLayout">
          <div className="signInLeft">
            <div className="leftInfo">
              <div className="title">
                <h3>Welcome back</h3>
                <span>Welcome back! Please enter your details.</span>
              </div>
              <div className="formWrapper">
                <form onSubmit={handleSubmit} autoComplete="false">
                  <div className="input">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="email"
                      placeholder="Enter your email"
                      className={
                        errors.email && touched.email ? "input-error" : ""
                      }
                    />
                  </div>
                  <div className="input">
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      placeholder="Password"
                      className={
                        errors.password && touched.password ? "input-error" : ""
                      }
                    />
                  </div>
                  <div className="signInBtn">
                    <Button url="/dashboard" text="Sign in" />
                  </div>
                  <div className="orSignInWith">
                    <button className="signInWithBtn">
                      <img src={GoogleIcon} alt="" />
                      <span>Sign up with Google</span>
                    </button>
                  </div>
                </form>
                <div className="dontHaveAcc">
                  <p>
                    Don't have an account? <Link to="/signup">Sign up</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="signInRight"></div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
