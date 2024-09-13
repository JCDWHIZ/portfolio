import React, { useState } from "react";
import fetchWithToken from "../components/Service";
import { useNavigate } from "react-router-dom";

function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWithToken(
      "https://portfolio-backend-d7ca.onrender.com/login",
      "POST",
      {
        password: password,
      }
    )
      .then((data) => {
        localStorage.setItem("token", data.token);
        navigate("/admin/dashboard");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="bg-lightnavy h-[100vh] justify-center items-center flex">
      <div className="w-[80%]">
        <div className="flex justify-center items-center flex-col">
          <div className="">
            <h1 className="roboto md:text-[80px] lg:text-[90px] font-bold text-lightestslate sm:text-[50px]">
              Welcome
            </h1>
          </div>
          <div className="">
            <form
              className="flex justify-center items-center gap-3 flex-col "
              onSubmit={handleSubmit}
            >
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="py-2 px-4 hover:bg-green/10 border rounded-lg text-green border-green text-[18px] outline-none bg-transparent "
              />
              <button
                type="submit"
                className="w-full py-2 hover:bg-green/10 border rounded-lg text-green border-green text-[18px]"
              >
                Login
              </button>
            </form>
            {error ? (
              <div className="py-2 px-4 hover:bg-green/10 border rounded-lg text-[#f00] border-[#f00] text-[18px] outline-none bg-transparent mt-5">
                {error}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
