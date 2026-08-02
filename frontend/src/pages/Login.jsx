import React, { useState } from "react";

const Login = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    phone: "",
  });

  const { name, email, password, username, phone } = formFields;

  const inputFields = [
    {
      name: "name",
      type: "text",
      placeholder: "Enter your full name",
      value: name,
    },
    {
      name: "email",
      type: "email",
      placeholder: "Enter your email address",
      value: email,
    },
    {
      name: "username",
      type: "text",
      placeholder: "Choose a username",
      value: username,
    },
    {
      name: "password",
      type: "password",
      placeholder: "Create a strong password",
      value: password,
    },
    {
      name: "phone",
      type: "tel",
      placeholder: "Enter your phone number",
      value: phone,
    },
  ];

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen p-5 bg-gradient-to-br from-[#FCF5EB] to-[#F5E6D3]">
      {/* Header */}
      <div className="flex items-center gap-2 mb-8 max-w-6xl mx-auto">
        <img
          className="w-10 h-10"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/960px-WhatsApp.svg.png"
          alt="WhatsApp"
        />
        <h5 className="text-2xl font-bold text-green-500">WhatsApp</h5>
      </div>

      {/* Main Card */}
      <div className="bg-white max-w-5xl mx-auto rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 p-8 lg:p-12">
          {/* Left Side - Info Section */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-2">
                Add data to
                <span className="text-green-500"> continue</span>
              </h2>
              <div className="w-20 h-1 bg-green-500 rounded-full"></div>
            </div>

            <p className="text-gray-600 text-sm">
              Complete your profile to start connecting with friends and family.
            </p>

            <ul className="space-y-4 mt-4">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">
                  Fill in your details
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 5l7 7-7 7M5 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">
                  Click the login button
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">
                  Start connecting instantly
                </span>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-100">
              <p className="text-sm text-green-700">
                🔒 Your data is secure and encrypted
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {inputFields.slice(0, 4).map((item, index) => (
                  <div
                    key={index}
                    className={index === 0 ? "sm:col-span-1" : "sm:col-span-1"}
                  >
                    <label
                      htmlFor={item.name}
                      className="block text-gray-600 capitalize text-sm font-semibold mb-1.5"
                    >
                      {item.name}
                    </label>
                    <input
                      value={item.value}
                      onChange={handleChange}
                      id={item.name}
                      name={item.name}
                      type={item.type}
                      placeholder={item.placeholder}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all duration-200 text-gray-700 placeholder-gray-400"
                    />
                  </div>
                ))}
              </div>

              {/* Phone - Full Width */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-600 capitalize text-sm font-semibold mb-1.5"
                >
                  phone
                </label>
                <input
                  value={phone}
                  name="phone"
                  onChange={handleChange}
                  id="phone"
                  type="tel"
                  placeholder={inputFields[4].placeholder}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all duration-200 text-gray-700 placeholder-gray-400"
                />
              </div>

              {/* Terms & Submit */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-green-500 hover:underline font-medium"
                    >
                      Terms & Conditions
                    </a>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                >
                  Login →
                </button>
              </div>

              <p className="text-xs text-gray-400 text-center mt-2">
                By continuing, you agree to our privacy policy
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 text-sm text-gray-400 max-w-5xl mx-auto">
        © 2026 WhatsApp Clone. All rights reserved.
      </div>
    </div>
  );
};

export default Login;
