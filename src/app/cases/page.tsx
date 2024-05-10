"use client";
import CaseCard from "@/components/CaseCard";
import { useAuthContext } from "@/context";
import { dummyCases } from "@/dummy";
import { CaseProps } from "@/types";
import { useRouter } from "next/router";
import React from "react";

const CasesPage = () => {
  const { userSession, setUserSession } = useAuthContext();
  const router = useRouter();

  const allCases: Array<CaseProps> = dummyCases;
  if (userSession.loggedIn) {
    console.log(allCases);

    return (
      <div className=" flex flex-wrap justify-center">
        {allCases?.map((item) => (
          <CaseCard key={item.username} info={item} />
        ))}
      </div>
    );
  } else {
    router.push("/");
  }
};

export default CasesPage;
