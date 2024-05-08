import CaseCard from "@/components/CaseCard";
import { dummyCases } from "@/dummy";
import React from "react";

const Cases = () => {
  const allCases = dummyCases;
  console.log(allCases);
  return (
    <div className=" flex flex-wrap justify-center">
      {allCases?.map((item) => (
        <CaseCard key={item.username} caseInfo={item} />
      ))}
    </div>
  );
};

export default Cases;
