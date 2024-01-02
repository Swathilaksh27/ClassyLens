import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Logo from "./Logo";
import axios from "axios";
import "./Login.css"

const Login = () => {
  const navigate = useNavigate();
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/auth/login", loginCredentials);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("email",loginCredentials.email);

      const role = response.data.role;

      if (role === "ADMIN") {
        navigate("/admin-home");
      } else if (role === "CUSTOMER") {
        navigate("/home");
      } else {
        console.error("Unsupported role. Handle appropriately.");
      }
    } catch (error) {
      console.error("Login failed. Handle error or show a message to the user.");
    }
  };

  return (
    <main className="grid grid-rows-1 lg:grid-cols-2 w-full h-screen m-auto">
    <div className="maincontent">
      
      <div className="flex items-center justify-center w-full px-5">
        <section className="px-7 py-10 rounded-md shadow-md bg-white/[0.7] flex flex-col gap-6 w-full max-w-lg">
          
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold mb-3">Login to your account</h1>

            <form action="" className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <label className="flex flex-col">
                Email
                <input
                  type="email"
                  className="border rounded-md p-1.5 shadow-sm"
                  value={loginCredentials.email}
                  onChange={(e) =>
                    setLoginCredentials({
                      ...loginCredentials,
                      email: e.target.value,
                    })
                  }
                />
              </label>
              <label className="flex flex-col">
                Password
                <input
                  type="password"
                  className="border rounded-md p-1.5 shadow-sm"
                  value={loginCredentials.password}
                  onChange={(e) =>
                    setLoginCredentials({
                      ...loginCredentials,
                      password: e.target.value,
                    })
                  }
                />
              </label>
              <div className="w-full py-2 flex flex-col gap-4 items-center">
                <button
                  className="btn-primary w-2/3 text-lg text-center"
                  disabled={!loginCredentials.email || !loginCredentials.password}
                  type="submit"
                >
                  Login
                </button>
                
                <Link to="/signup" className="underline text-gray-600">
                  Create an Account
                </Link>
              </div>
            </form>
          </div>
        </section>
      </div>
      </div>
    </main>
  );
};

export default Login;




