import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";
import { notifyError } from "../../packages/Notify";
import LoginForm from "./LoginApear";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.number().min(5, "Password must be at least 5 characters").required("Password is required"),
});

function storeUserData(name, token) {
  const currentTime = new Date().getTime();
  const expirationTime = currentTime + 20 * 1000; 
  const userData = { name, token, loginTime: currentTime, expirationTime };
  localStorage.setItem("userData", JSON.stringify(userData));
}

function FormComponent() {

  
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post(
        "https://react-camp-api.roocket.ir/api/admin/login",
        values
      );
      if (response.status === 200) {
        const { name, token } = response.data;
        storeUserData(name, token);
        window.location.href = "/post";
      }
    } catch (error) {
      console.error("Error:", error);
      notifyError("Incorrect email or password");
    } finally {
      setSubmitting(false);
      resetForm();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-100">
            Sign in to your account
          </h2>
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formikProps) => <LoginForm {...formikProps} />}
        </Formik>
      </div>
    </div>
  );
}

export default FormComponent;
