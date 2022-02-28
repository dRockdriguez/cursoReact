import React, { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("Me renderizo");
  return (
    <>
      <h3>Small {value}</h3>
    </>
  );
});
