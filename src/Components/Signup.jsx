import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

import Logo from "./Logo";
import { setUser } from "./userActions";

const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    role: "CUSTOMER", // Add the 'role' property to the userDetails state
  });
  const [showPassword, setShowPassword] = useState(false);
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle user registration here

    fetch("http://localhost:8080/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userDetails),
    }).then(() => {
      nav("/");
    });
  };

  return (
    <main className="grid grid-rows-1 md:grid-cols-2 w-full h-screen m-auto">
      <div className="maincontent">
      <div className="flex items-center justify-center w-full px-5">
        <section className="px-10 py-10 rounded-md shadow-md bg-white bg-opacity-70 flex flex-col gap-6 w-full max-w-lg">
          
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold mb-3">Sign up</h1>
          </div>

          <form action="" className="flex flex-col gap-4 py-5" onSubmit={handleSubmit}>
            <label className="flex flex-col">
              <input
                type="text"
                required
                placeholder="Name"
                className="border rounded-md p-2 shadow-md"
                value={userDetails.name}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, name: e.target.value })
                }
              />
            </label>
            <label className="flex flex-col">
              <input
                type="email"
                required
                placeholder="Email"
                className="border rounded-md p-2 shadow-md"
                value={userDetails.email}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
              />
            </label>
            <label className="flex flex-col">
              <input
                required
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                className="border rounded-md p-2 shadow-md"
                value={userDetails.password}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
              />
              <span
                className="absolute right-2 top-2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
            </label>
            <label className="flex flex-col">
              <input
                type="text"
                required
                placeholder="Role"
                className="border rounded-md p-2 shadow-md"
                value={userDetails.role}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, role: e.target.value })
                }
              />
            </label>
            <div className="w-full py-2 flex flex-col gap-4 items-center">
              <button type="submit" className="btn-primary w-2/3 text-lg text-center">
                Create Account
              </button>
              <p className="text-gray-600 text-sm">
                Already have an account?{" "}
                <Link to="/" className="underline text-base">
                  Login
                </Link>
              </p>
              
            </div>
          </form>
        </section>
      </div>
      </div>
    </main>
  );
};

export default Signup;
