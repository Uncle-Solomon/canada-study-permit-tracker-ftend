"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NavBar = () => {
  const router = useRouter();
  return (
    <header className=" w-full">
      <nav className=" max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 my-2">
        <h1>Canadian Study Permit Tracker</h1>
        <button onClick={() => router.push("/")}>Sign Out</button>
      </nav>
    </header>
  );
};

export default NavBar;
