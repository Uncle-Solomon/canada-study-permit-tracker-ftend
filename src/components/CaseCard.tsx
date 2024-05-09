"use client";
import { CaseProps } from "@/types";
import React, { useState } from "react";
import { CaseDetails } from ".";

interface CaseCardProps {
  info: CaseProps;
}

const CaseCard = ({ info }: CaseCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    username,
    application_date,
    application_status,
    biometric_date,
    biometric_status,
    medical_date,
    medical_status,
    elegibility_date,
    elegibility_status,
    background_check_date,
    background_check_status,
  } = info;

  function findMostRecentDate(...dates: Date[]): Date {
    // Filter out null or undefined values before comparison
    const validDates = dates.filter((date) => date != null);

    // If no valid dates remain, return null
    if (validDates.length === 0) {
      return new Date(Date.now());
    }

    // Use reduce to find the most recent date among valid dates
    return validDates.reduce((mostRecent, current) => {
      const currentMillis = current.getTime();
      if (currentMillis > mostRecent.getTime()) {
        return current;
      }
      return mostRecent;
    }, validDates[0]);
  }

  const mostRecentDate = findMostRecentDate(
    biometric_date,
    medical_date,
    background_check_date,
    elegibility_date
  );
  console.log(mostRecentDate);

  let recent_status = "";
  let recentUpdate = "";
  if (mostRecentDate) {
    if (mostRecentDate === biometric_date) {
      recentUpdate = "Biometric";
      recent_status = biometric_status || "";
    } else if (mostRecentDate === medical_date) {
      recentUpdate = "Medical";
      recent_status = medical_status || "";
    } else if (mostRecentDate === elegibility_date) {
      recentUpdate = "Eligibility Review";
      recent_status = elegibility_status || "";
    } else if (mostRecentDate === background_check_date) {
      recentUpdate = "Background Check";
      recent_status = background_check_status || "";
    }
  }

  return (
    <div
      className=" flex flex-col mx-2 p-4 bg-gray-50 cursor-pointer hover:bg-white my-2 rounded-xl w-64 "
      onClick={() => setIsOpen(true)}
    >
      <h1 className="text-lg font-bold mb-4">{username}</h1>
      <div className=" mb-8">
        <div className="flex justify-between text-sm items-center mb-2">
          <p className=" text-black">Application Status</p>
          <p className=" bg-approved px-2 py-1 font-extralight thin text-white rounded-xl">
            {application_status}
          </p>
        </div>
        <div className="flex justify-between text-sm">
          <p className=" text-black">Submission Date</p>
          <p>{application_date?.toDateString()}</p>
        </div>
      </div>
      <div className="flex justify-between text-sm items-center mb-2">
        <p className="font-italic text-gray-500">Recent Update:</p>
        <p>{recentUpdate}</p>
      </div>
      <div className="flex justify-between text-sm items-center mb-2">
        {mostRecentDate ? (
          <>
            <p>{mostRecentDate.toDateString()}</p>
            <p className=" bg-waiting px-2 py-1 font-extralight thin text-white rounded-xl">
              {recent_status}
            </p>
          </>
        ) : (
          "No recent updates"
        )}
      </div>
      <CaseDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        info={info}
      />
    </div>
  );
};

export default CaseCard;
