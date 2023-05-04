import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function Spinner({ message }) {
  return (
    <div className="spiner">
      <ClipLoader
        color={"#000"}
        loading={true}
        cssOverride={{
          display: "block",
          position: "absolute",
          top: "50%",
          left: "50%",
          borderColor: "blue",
        }}
        size={50}
        aria-label={message}
        data-testid="loader"
      ></ClipLoader>
    </div>
  );
}
