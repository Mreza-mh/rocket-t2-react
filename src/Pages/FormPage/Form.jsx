import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";
import { notifyError } from "../../packages/Notify";
import { useDispatch } from "react-redux";  // =================================================================
import { setUserdata } from "../../Store/Slices/AuthUser";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function storeToken(name, token) {
  const currentTime = new Date().getTime();
  const expirationTime = currentTime + 20 * 1000;
  const userData = { name, token, loginTime: currentTime, expirationTime };
  localStorage.setItem("userData", JSON.stringify(userData));
}

function FormComponent() {
  const dispatch = useDispatch(); // =================================================================

  function handleSubmit(values, { setSubmitting }) {
    axios
      .post("https://react-camp-api.roocket.ir/api/admin/login", values)
      .then((response) => {
        console.log("Response data:", response.data);

        if (response.status === 200) {
          const { name, token } = response.data;
          storeToken(name, token);
          dispatch(setUserdata(token)); // =================================================================
          console.log(token);
          window.location.href = "/post";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        notifyError("Incorrect information");
      })
      .finally(() => {
        setSubmitting(false);
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full ">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-100">
            Sign in to your account
          </h2>
        </div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <div className="flex flex-col items-center justify-center min-h-screen">
              <div className="w-full max-w-md bg-[#979ba1dc] rounded-lg shadow-lg">
                <div className="px-10 py-8">
                  <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                    Login
                  </h2>

                  <Form className="space-y-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        E-mail
                      </label>
                      <Field
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your e-mail address"
                        autoComplete="email"
                        className="block w-full px-4 py-2 mt-1 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        required
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-600 text-xs mt-1"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <Field
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        autoComplete="current-password"
                        className="block w-full px-4 py-2 mt-1 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        required
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-600 text-xs mt-1"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 mt-14 bg-indigo-600 text-white rounded-md font-semibold uppercase focus:outline-none hover:bg-indigo-700 transition duration-300 ease-in-out"
                    >
                      {isSubmitting ? "Logging in..." : "Submit"}
                    </button>
                  </Form>
                </div>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default FormComponent;
