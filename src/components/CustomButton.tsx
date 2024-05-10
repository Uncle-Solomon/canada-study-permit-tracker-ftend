import React from "react";

const CustomButton = ({
  isLoading,
  text,
}: {
  isLoading: boolean;
  text: string;
}) => {
  return (
    <button
      type="submit"
      className={`p-2  rounded-lg text-white ${
        isLoading
          ? "bg-[#ccc] opacity-50 cursor-progress"
          : "bg-approved opacity-100 cursor-pointer"
      } font-semibold`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
