// LoginForm.jsx

import React from "react";
import { Form, Field, ErrorMessage } from "formik";
import { RiMailLine, RiLockPasswordLine } from "react-icons/ri";

function LoginForm({ isSubmitting }) {
return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-md bg-gray-600 rounded-3xl  shadow-inner shadow-slate-100  p-2">
            <div className="w-full max-w-md bg-gray-500 rounded-2xl shadow-xl shadow-gray-600 p-1 ">
            <div className="w-full max-w-md bg-gray-200 rounded-xl shadow-2xl shadow-black pt-1">
                <div className="px-10 py-8">
                <h2 className="text-3xl font-semibold text-center text-gray-800  ">
                    Login
                </h2>
                <hr className=" border-gray-900/60 mt-8 mb-12" />
                <Form className="space-y-4">
                    <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        <span className="flex items-center">
                        <RiMailLine className="mr-2 h-6 w-6 text-gray-600" />
                        E-mail
                        </span>
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
                        className="text-red-700 text-xs mt-1"
                    />
                    </div>

                    <div>
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                    >
                        <span className="flex items-center">
                        <RiLockPasswordLine className="mr-2 h-6 w-6 text-gray-600" />
                        Password
                        </span>
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
                        className="text-red-700 text-xs mt-1"
                    />
                    </div>

                    <div className="mt-1">
                    <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 mt-4 bg-indigo-600 text-white rounded-md font-semibold uppercase focus:outline-none hover:bg-indigo-700 transition duration-300 ease-in-out"
                    >
                    {isSubmitting ? "Logging in..." : "Submit"}
                    </button>
                    </div>
                </Form>
                </div>
            </div>
            </div>
        </div>
    </div>
);
}

export default LoginForm;
