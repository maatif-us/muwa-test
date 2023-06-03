import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { useRegisterUserMutation } from "../features/auth/authApiSlice";

import authSchema from "../schemas/authSchema";
import AuthForm from "../components/AuthForm";

const Register = () => {
  const navigate = useNavigate();

  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },

    validationSchema: authSchema,

    onSubmit: async (values, actions) => {
      try {
        console.log(values);
        const res = await registerUser(values).unwrap();
        console.log(res);
        navigate("/login");
      } catch (err) {
        toast.error(err?.data?.errorMessage || err.message || "Login Failed");

        actions.resetForm();
      }
    },
  });

  return (
    <AuthForm
      formType={"Register"}
      handleSubmit={formik.handleSubmit}
      isSubmitting={formik.isSubmitting}
      formik={formik}
      errorMsg={true}
    />
  );
};

export default Register;
