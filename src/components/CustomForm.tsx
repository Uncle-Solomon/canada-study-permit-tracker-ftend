"use client";
import { storeLoginSession } from "@/utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CustomForm = ({ formType }: { formType: Boolean }) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const base_url = process.env.BASE_URL;

    if (formType === true) {
      // signup
      try {
        const response = await fetch(`${base_url}/signup`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, username, password }),
        });

        if (!response.ok) {
          throw new Error(`Signup failed with status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Signup successful:", data);
        if (data) {
          router.push("/");
        }
      } catch (error: any) {
        setErrorMessage(error.message);
      }
    } else {
      try {
        const response = await fetch(`${base_url}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
          throw new Error(`Login failed: ${response.status}`);
        }

        const data = await response.json();
        // console.log("Login successful:", data);
        if (data) {
          console.log(data.token);
          setIsLoggedIn(true);
          storeLoginSession(isLoggedIn, data.token);
          router.push("/cases");
        }
      } catch (error: any) {
        setErrorMessage(error.message);
      }
    }
  };
  return (
    <div>
      <form className=" text-sm font-semibold" onSubmit={handleSubmit}>
        {formType && (
          <div className="">
            <label className="  w-full my-2">Email:</label>
            <input
              type="email"
              className="  w-full h-4 p-4 font-light my-2 border border-1 border-gray-500 rounded-lg outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        )}
        <div className="">
          <label className="  w-full my-2">Username:</label>
          <input
            type="text"
            className="  w-full h-4 p-4 font-light my-2 border border-1 border-gray-500 rounded-lg outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className="  w-full my-2">Password:</label>
          <input
            type="password"
            className="  w-full h-4 p-4 font-light my-2 border border-1 border-gray-500 rounded-lg outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMessage && (
          <div className="text-red-500 font-semibold my-2">{errorMessage}</div>
        )}

        <button
          type="submit"
          className=" p-2 bg-approved rounded-lg text-white font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CustomForm;
