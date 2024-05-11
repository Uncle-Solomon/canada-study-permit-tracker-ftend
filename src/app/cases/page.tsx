"use client";
import CaseCard from "@/components/CaseCard";
import { useAuthContext } from "@/context";
// import { dummyCases } from "@/dummy";
import { CaseProps } from "@/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CasesPage = () => {
  const { userSession, setUserSession } = useAuthContext();
  const [allCases, setAllCases] = useState<Array<CaseProps>>([]);
  const router = useRouter();

  // let allCases: Array<CaseProps> = [];
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
        setAllCases(data.data);
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
  }, []);
  return (
    <div className=" flex flex-wrap justify-center">
      {userSession.loggedIn ? (
        <div>
          <div>
            {allCases.map((item) => (
              <p key={item.username}>{item.application_status}</p>
            ))}
          </div>
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
