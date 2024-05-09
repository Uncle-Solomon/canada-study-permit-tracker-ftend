"use client";
import { useAuthContext } from "@/context";
import { useRouter } from "next/navigation";
import React from "react";

const NavBar = () => {
  const { userSession, setUserSession } = useAuthContext();

  const router = useRouter();
  return (
    <header className=" w-full">
      <nav className=" max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 my-2">
        <h1>Canadian Study Permit Tracker</h1>
        {userSession.loggedIn && (
          <button
            onClick={() => {
              setUserSession({ user: "", token: "", loggedIn: false });

              router.push("/");
            }}
          >
            Sign Out
          </button>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
