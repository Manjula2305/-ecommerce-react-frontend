import React from "react";

const Feedback = ({ type, children }) => {
  const style = {
    color: type === "positive" ? "green" : "red",
  };

  return <div style={style}>{children}</div>;
};

export default Feedback;