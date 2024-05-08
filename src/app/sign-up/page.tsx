import { CustomForm } from "@/components";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-[80vh]">
      <h3></h3>

      <div className="p-8 border border-1 border-gray-300 rounded-lg ">
        <CustomForm formType={true} />
      </div>
      <p>Have an account already?</p>
      <Link
        href="/"
        className=" p-2 border border-1 rounded-xl bg-approved text-white"
      >
        Log In
      </Link>
    </div>
  );
};

export default page;
