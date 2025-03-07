import React from "react";
import { Dna } from "react-loader-spinner";

const ScreenLoaderStyle = {
  position: "absolute",
  backdropFilter: "blur(4px)",
  width: "100%",
  height: "100%",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: "rgba(255, 255, 255, 0.4)",
  zIndex: 9999,
  display: "block",
  transition: "all 0.3s ease-in-out"
};

export default function ScreenLoader() {
  return (
    <React.Fragment>
      <div className="fadeIn" style={ ScreenLoaderStyle }>
        <Dna
          visible={true}
          height="124"
          width="124"
          ariaLabel="dna-loading"
          wrapperStyle={{ position: "absolute", top: "38%", left: "41%", backgroundColor: "#ffffff", borderRadius: "8px", padding: "20px" }}
          wrapperclassName="dna-wrapper"
        />
      </div>
    </React.Fragment>
  );
}
