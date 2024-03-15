import * as yup from "yup"
export const SignInSchema = yup.object().shape({
  email: yup
    .string()
    .oneOf([yup.ref("email"), null])
    .required("Required"),
  password: yup
    .string()
    .min(10)
    .oneOf([yup.ref("password"), null])
    .required("Required"),
});
// export default SignInSchema;