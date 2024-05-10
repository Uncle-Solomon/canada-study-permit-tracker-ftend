"use client";
import CaseCard from "@/components/CaseCard";
import { useAuthContext } from "@/context";
import { dummyCases } from "@/dummy";
import { CaseProps } from "@/types";
import { Console } from "console";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const CasesPage = () => {
  const { userSession, setUserSession } = useAuthContext();
  const router = useRouter();

  let allCases: Array<CaseProps> = [];
  const handleFetch = async () => {
    const base_url = process.env.NEXT_PUBLIC_API_URL;

    try {
      const response = await fetch(`${base_url}/cases`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userSession.token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Creation failed: ${response.status}`);
      }

      const data = await response.json();
      console.log("fetch successful:", data);
      if (data) {
        console.log(data);
        allCases = data.data;
        return allCases;
      }
    } catch (error: any) {}
  };

  useEffect(() => {
    if (!userSession.loggedIn) {
      router.push("/"); // Redirect to login page if not logged in
    }
  }, [userSession, router]); // Dependency on userSession ensures effect runs only on change

  useEffect(() => {
    handleFetch();
  }, [allCases]);
  return (
    <div className=" flex flex-wrap justify-center">
      {userSession.loggedIn ? (
        <div>
          {allCases.map((item) => (
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
