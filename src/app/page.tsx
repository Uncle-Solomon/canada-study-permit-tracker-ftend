import { CustomForm } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-4 justify-center items-center h-[80vh]">
        <h3></h3>

        <div className="p-8 border border-1 border-gray-300 rounded-lg ">
          <CustomForm formType={"login"} />
        </div>
        <p>Do not have an account yet ?</p>
        <Link
          href="/sign-up"
          className=" p-2 border border-1 rounded-xl bg-approved text-white"
        >
          Sign Up
        </Link>
      </div>
    </main>
  );
}
