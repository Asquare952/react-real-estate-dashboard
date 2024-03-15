import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
// min of 6 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit

const emailRules = /^[\w]+@([\w-]+\.)+[\w-]{2,4}$/;
export const signUpSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required('Required'),
  email: yup
    .string()
    .matches(emailRules, { message: "Please enter a valid email" })
    .required('Required'),
  password: yup
    .string()
    .min(10)
    .matches(passwordRules, { message: "Please create a strong password" })
    .required('Required'),
});