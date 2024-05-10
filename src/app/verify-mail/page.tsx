import { CustomForm } from "@/components";
import Link from "next/link";
import React from "react";

const VerifyPage = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-[80vh]">
      <h3></h3>

      <div className="p-8 border border-1 border-gray-300 rounded-lg ">
        <CustomForm formType={"verify-mail"} />
      </div>
      <p>Do not have an account yet?</p>
      <Link
        href="/sign-up"
        className=" p-2 border border-1 rounded-xl bg-approved text-white"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default VerifyPage;
