"use client";
import { useAuthContext } from "@/context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const NavBar = () => {
  const { userSession, setUserSession } = useAuthContext();

  const router = useRouter();
  return (
    <header className=" w-full">
      <nav className=" max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 my-2 ">
        <h1 className="text-xs md:text-base lg:text-lg">
          Canadian Study Permit Tracker
        </h1>

        {userSession.loggedIn && (
          <div className=" flex gap-2">
            <div>
              <ul className=" flex gap-1">
                <li className="   py-1 px-2 rounded-md  text-xs">
                  <Link href="/cases">Cases</Link>
                </li>
                <li className="   py-1 px-2 rounded-md  text-xs">
                  <Link href="/edit">Edit Case</Link>
                </li>
                <li className="   py-1 px-2 rounded-md  text-xs">
                  <Link href="/create">Create Case</Link>
                </li>
              </ul>
            </div>
            <button
              onClick={() => {
                setUserSession({ user: "", token: "", loggedIn: false });

                router.push("/");
              }}
              className="text-xs md:text-base lg:text-lg"
            >
              Sign Out
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
