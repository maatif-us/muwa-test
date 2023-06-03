import { Link } from "react-router-dom";

const AuthForm = ({
  formType,
  handleSubmit,
  isSubmitting,
  formik,
  errorMsg,
}) => {
  return (
    <>
      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">
                  Welcome{formType === "Login" && " back"}. We exist to make
                  entrepreneurism easier.
                </h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form onSubmit={handleSubmit}>
                  {formType === "Register" && (
                    <>
                      <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                          <label
                            className="block text-gray-800 text-sm font-medium mb-1"
                            htmlFor="name"
                          >
                            Username <span className="text-red-600">*</span>
                          </label>
                          <input
                            id="name"
                            className="form-input w-full text-gray-800"
                            placeholder="Enter your name"
                            required
                            type="text"
                            name="username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          {errorMsg &&
                          formik.touched.username &&
                          formik.errors.username ? (
                            <p className="text-red-600 my-1">
                              {formik.errors.username}
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </>
                  )}

                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="email"
                      >
                        Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your email address"
                        required
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {errorMsg &&
                      formik.touched.email &&
                      formik.errors.email ? (
                        <p className="text-red-600 my-1">
                          {formik.errors.email}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="password"
                      >
                        Password <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="password"
                        type="password"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your password"
                        required
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {errorMsg &&
                      formik.touched.password &&
                      formik.errors.password ? (
                        <p className="text-red-600 my-1">
                          {formik.errors.password}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button
                        className="btn text-white bg-blue-600 hover:bg-blue-700 w-full"
                        disabled={isSubmitting}
                        type="submit"
                      >
                        {formType === "Register" ? "Sign up" : "Sign in"}
                      </button>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 text-center mt-3">
                    By creating an account, you agree to the{" "}
                    <a className="underline" href="#0">
                      terms & conditions
                    </a>
                    , and our{" "}
                    <a className="underline" href="#0">
                      privacy policy
                    </a>
                    .
                  </div>
                </form>
                <div className="text-gray-600 text-center mt-6">
                  {formType === "Register" ? (
                    <>
                      Already using MediaServer?{" "}
                      <Link
                        to="/login"
                        className="text-blue-600 hover:underline transition duration-150 ease-in-out"
                      >
                        Sign in
                      </Link>
                    </>
                  ) : (
                    <>
                      Don't you have an account?{" "}
                      <Link
                        to="/register"
                        className="text-blue-600 hover:underline transition duration-150 ease-in-out"
                      >
                        Sign up
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AuthForm;
