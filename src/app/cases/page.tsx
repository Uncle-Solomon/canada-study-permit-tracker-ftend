"use client";
import CaseCard from "@/components/CaseCard";
import { useAuthContext } from "@/context";
import { dummyCases } from "@/dummy";
import { CaseProps } from "@/types";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const CasesPage = () => {
  const { userSession, setUserSession } = useAuthContext();
  const router = useRouter();

  const allCases: Array<CaseProps> = dummyCases;

  useEffect(() => {
    if (!userSession.loggedIn) {
      router.push("/"); // Redirect to login page if not logged in
    }
  }, [userSession]); // Dependency on userSession ensures effect runs only on change

  return (
    <div className=" flex flex-wrap justify-center">
      {userSession.loggedIn ? (
        <div>
          {allCases?.map((item) => (
            <CaseCard key={item.username} info={item} />
          ))}
        </div>
      ) : (
        <></> // Empty element for conditional rendering
      )}
    </div>
  );
};

export default CasesPage;
