import { useEffect } from "react";

import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

import { useLoginUserMutation } from "../features/auth/authApiSlice";
import { setCredentials } from "../features/auth/authSlice";
import { toast } from "react-toastify";

import AuthForm from "../components/AuthForm";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginUser, { isLoading }] = useLoginUserMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/home");
    }
  }, [navigate, userInfo]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values, actions) => {
      try {
        const res = await loginUser(values).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate("/home");
      } catch (err) {
        toast.error(err?.data?.errorMessage || err.message || "Login Failed");

        actions.resetForm();
      }
    },
  });

  return (
    <AuthForm
      formType={"Login"}
      handleSubmit={formik.handleSubmit}
      isSubmitting={formik.isSubmitting}
      formik={formik}
    />
  );
};

export default Login;
