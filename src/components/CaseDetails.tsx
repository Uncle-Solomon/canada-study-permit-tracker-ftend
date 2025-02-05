"use client";

import { CaseProps } from "@/types";
import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

interface CaseDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  info: CaseProps;
}

const CaseDetails = ({ isOpen, closeModal, info }: CaseDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-600"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-out duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                    onClick={closeModal}
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>

                  <div className=" flex-1 flex flex-col gap-2">
                    <h2 className=" font-semibold text-xl capitalize border-b border-1 border-gray-300 pb-4">
                      {info.username}
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(info).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between gap-5 w-full text-right"
                        >
                          <h4 className=" text-black capitalize">
                            {key.split("_").join(" ")}:
                          </h4>
                          <p className="text-gray-800 font-semibold">
                            {typeof value === "string" && value === ""
                              ? "-"
                              : typeof value === "object" && !value
                              ? "N/A"
                              : typeof value === "object" &&
                                value instanceof Date
                              ? value.toLocaleDateString("en-NG", {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })
                              : value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CaseDetails;
