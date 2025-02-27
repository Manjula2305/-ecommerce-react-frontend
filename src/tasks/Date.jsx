import React from "react";

export const TodayDate = () => {
  const today = new Date().toLocaleDateString();
  return (
    <>
 <p>Today's Date: {today}</p>
 </>
  ) 
}

