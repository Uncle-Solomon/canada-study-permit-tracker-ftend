"use client";
import { useAuthContext } from "@/context";
import { retrieveLoginSession } from "@/utils";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
const createPage = () => {
  const { userSession, setUserSession } = useAuthContext();

  const router = useRouter();

  const [applicationDate, setApplicationDate] = useState(Date); // Date object
  const [applicationStatus, setApplicationStatus] = useState("Submitted"); // Default
  const [biometricStatus, setBiometricStatus] = useState("Not Started"); // Default
  const [biometricDate, setBiometricDate] = useState(Date); // Default
  const [medicalStatus, setMedicalStatus] = useState("N/A"); // Default
  const [medicalDate, setMedicalDate] = useState(Date); // Optional Date object
  const [eligibilityStatus, setEligibilityStatus] = useState("N/A"); // Default
  const [eligibilityDate, setEligibilityDate] = useState(Date); // Optional Date object
  const [backgroundCheckStatus, setBackgroundCheckStatus] = useState("N/A"); // Default
  const [backgroundCheckDate, setBackgroundCheckDate] = useState(Date); // Optional Date object
  const [pprRequest, setPprRequest] = useState("Yes"); // Default
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const base_url = process.env.BASE_URL;

    try {
      const response = await fetch(`${base_url}/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });

      if (!response.ok) {
        throw new Error(`Creation failed: ${response.status}`);
      }

      const data = await response.json();
      console.log("Edit successful:", data);
      if (data) {
        router.push("/");
      }
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };
  if (userSession.loggedIn) {
    return (
      <div>
        <div className=" flex flex-col justify-center ">
          <p className=" text-sm font-extra-light my-4 text-center">
            Adding these details about your study permit case will help us and
            the community alot
          </p>
          <form
            className=" text-sm font-semibold w-[85%] mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="my-6">
              <label className="w-full mr-2 text-sm font-semibold">
                Application Status:
              </label>
              <select
                id="application-status"
                name="application_status"
                required
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-2"
                value={applicationStatus}
                onChange={(e) => setApplicationStatus(e.target.value)}
              >
                <option value="Submitted">Submitted</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="my-6">
              <label className="w-full text-sm font-semibold ">
                Application Date:
              </label>
              <input
                type="date"
                id="application-date"
                name="application_date"
                required
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-2"
                value={applicationDate}
                onChange={(e) => setApplicationDate(e.target.value)}
              />
            </div>

            <div className="my-6">
              <label className="w-full mr-2 text-sm font-semibold">
                Biometric Status:
              </label>
              <select
                id="biometric-status"
                name="biometric_status"
                required
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-2"
                value={biometricStatus}
                onChange={(e) => setBiometricStatus(e.target.value)}
              >
                <option value="Not Started">Not Started</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div className="my-6">
              <label className="w-full text-sm font-semibold ">
                Biometric Completion Date:
              </label>
              <input
                type="date"
                id="biometric-date"
                name="biometric_date"
                required
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-2"
                value={biometricDate}
                onChange={(e) => setBiometricDate(e.target.value)}
              />
            </div>
            <div className="my-6">
              <label className="w-full mr-2 text-sm font-semibold">
                Medical Status:
              </label>
              <select
                id="medical-status"
                name="medical_status"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-2"
                value={medicalStatus}
                onChange={(e) => setMedicalStatus(e.target.value)}
              >
                <option value="N/A">N/A</option>
                <option value="Pending">Pending</option>
                <option value="Passed">Passed</option>
              </select>
            </div>
            <div className="my-6">
              <label className="w-full mr-2 text-sm font-semibold">
                Medical Date (Optional):
              </label>
              <input
                type="date"
                id="medical-date"
                name="medical_date"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-2"
                value={medicalDate}
                onChange={(e) => setMedicalDate(e.target.value)}
              />
            </div>
            <div className="my-6">
              <label className="w-full mr-2 text-sm font-semibold">
                Eligibility Status:
              </label>
              <select
                id="eligibility-status"
                name="eligibility_status"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-2"
                value={eligibilityStatus}
                onChange={(e) => setEligibilityStatus(e.target.value)}
              >
                <option value="N/A">N/A</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="my-6">
              <label className="w-full mr-2 text-sm font-semibold">
                Eligibility Date (Optional):
              </label>
              <input
                type="date"
                id="eligibility-date"
                name="eligibility_date"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-2"
                value={eligibilityDate}
                onChange={(e) => setEligibilityDate(e.target.value)}
              />
            </div>
            <div className="my-6">
              <label className="w-full mr-2 text-sm font-semibold">
                Background Check Status:
              </label>
              <select
                id="background-check-status"
                name="background_check_status"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-2"
                value={backgroundCheckStatus}
                onChange={(e) => setBackgroundCheckStatus(e.target.value)}
              >
                <option value="N/A">N/A</option>
                <option value="Not Started">Not Started</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="my-6">
              <label className="w-full mr-2 text-sm font-semibold">
                Background Check Date (Optional):
              </label>
              <input
                type="date"
                id="background-check-date"
                name="background_check_date"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-2"
                value={backgroundCheckDate}
                onChange={(e) => setBackgroundCheckDate(e.target.value)}
              />
            </div>
            <div className="my-6">
              <label className="w-full mr-2 text-sm font-semibold">
                PPR Request:
              </label>
              <select
                id="ppr-request"
                name="pPR_Request"
                required
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-2"
                value={pprRequest}
                onChange={(e) => setPprRequest(e.target.value)}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            {errorMessage && (
              <div className="text-red-500 font-semibold my-2">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              className=" p-2 bg-approved rounded-lg text-white font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  } else {
    router.push("/");
  }
};

export default createPage;
