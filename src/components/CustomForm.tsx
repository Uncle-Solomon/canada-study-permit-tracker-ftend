"use client";
import { useAuthContext } from "@/context";
import { storeLoginSession } from "@/utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CustomButton from "./CustomButton";

const CustomForm = ({ formType }: { formType: string }) => {
  const { userSession, setUserSession } = useAuthContext();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const base_url = process.env.NEXT_PUBLIC_API_URL;
    if (formType === "signup") {
      // signup
      try {
        const response = await fetch(`${base_url}/auth/signup`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, username, password }),
        });

        const data = await response.json();
        // console.log("Login successful:", data);
        if (data) {
          // console.log(data);
          if (data.success === true) {
            router.push("/verify-mail");
          } else {
            setErrorMessage(data.message);
          }
        }
      } catch (error: any) {
        setErrorMessage(error.message);
      }
    } else if (formType === "login") {
      try {
        const response = await fetch(`${base_url}/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        // console.log("Login successful:", data);
        if (data) {
          // console.log(data);
          if (data.success === true) {
            setUserSession({
              user: username,
              token: data.data.token,
              loggedIn: true,
            });
            storeLoginSession(true, data.data.token);
            router.push("/cases");
          } else {
            setErrorMessage(data.message);
          }
        }
      } catch (error: any) {
        setErrorMessage(error.message);
      }
    } else {
      try {
        const response = await fetch(`${base_url}/auth/verify-email`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, secretKey }),
        });

        const data = await response.json();
        // console.log("Login successful:", data);
        if (data) {
          // console.log(data);
          if (data.success === true) {
            router.push("/");
          } else {
            setErrorMessage(data.message);
          }
        }
      } catch (error: any) {
        setErrorMessage(error.message);
      }
    }
    setIsLoading(false);
  };
  return (
    <div>
      <form className=" text-sm font-semibold" onSubmit={handleSubmit}>
        {formType === "signup" && (
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
        {formType === "signup" || formType === "login" ? (
          <div>
            <label className="  w-full my-2">Password:</label>
            <input
              type="password"
              className="  w-full h-4 p-4 font-light my-2 border border-1 border-gray-500 rounded-lg outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        ) : (
          <div>
            <label className="  w-full my-2">SecretKey:</label>
            <input
              type="password"
              className="  w-full h-4 p-4 font-light my-2 border border-1 border-gray-500 rounded-lg outline-none"
              value={secretKey}
              onChange={(e) => setSecretKey(e.target.value)}
            />
          </div>
        )}

        {errorMessage && (
          <div className="text-red-500 font-semibold my-2">{errorMessage}</div>
        )}

        <CustomButton text="Submit" isLoading={isLoading} />
      </form>
    </div>
  );
};

export default CustomForm;
