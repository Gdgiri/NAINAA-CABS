import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import contactkey from "../assets/contactkey.jpg";
import UseContactUsHook from "../CustomHook/UseContactUsHook";
import wheelImg from "../assets/wheel.png";
const ContactUs = () => {
  const { loading, sendToMail } = UseContactUsHook();

  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      mobile: Yup.string()
        .required("Mobile number is required")
        .matches(/^\d{10}$/, "Enter a valid 10-digit mobile number"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      const formData = {
        name: values.name,
        mobile: values.mobile,
        email: values.email,
        feedback: values.message,
      };
      sendToMail(formData);
      console.log("Form Data:", formData);
      resetForm();
    },
  });

  return (
    <section id="contact" className="relative bottom-8 ">
      <div className="text-center z-20 relative bottom-6 ">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#2E709E]">
          Contact Us
        </h2>
        <div className="w-48 md:w-72 h-1 mx-auto mt-2 bg-[#E6A43B] rounded-full"></div>

        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="bg-white shadow-md rounded-lg max-w-5xl w-full flex flex-col md:flex-row overflow-hidden mb-24 md:mb-2">
            {/* Left: Contact Form */}
            <div className="w-full md:w-1/2 p-8 mb-24">
              <h2 className="text-center text-xl font-semibold text-[#2E709E] mb-2">
                Feel free to connect with us
              </h2>
              <form onSubmit={formik.handleSubmit} className="space-y-4 mt-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name*"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-sm text-red-500">{formik.errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Mobile Number*"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.mobile}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  {formik.touched.mobile && formik.errors.mobile && (
                    <p className="text-sm text-red-500">
                      {formik.errors.mobile}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email*"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-sm text-red-500">
                      {formik.errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  {formik.touched.message && formik.errors.message && (
                    <p className="text-sm text-red-500">
                      {formik.errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="bg-[#E6A43B] hover:bg-yellow-600 text-white py-2 px-6 rounded shadow-md transition duration-300"
                  disabled={loading}
                >
                  {loading ? (
                    <img
                      src={wheelImg}
                      alt="Spinning Wheel"
                      className="w-10 h-10 animate-spin"
                    />
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-1/2 hidden md:block relative">
              <img
                src={contactkey}
                alt="Contact Illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
