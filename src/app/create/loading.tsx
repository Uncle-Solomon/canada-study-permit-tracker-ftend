import React from "react";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="sweet-loading">
      <ClipLoader
        color={"#fff"}
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
