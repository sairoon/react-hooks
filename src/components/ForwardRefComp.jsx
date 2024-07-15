import React, { forwardRef } from "react";

const ForwardRefComp = ({ placeholder }, ref) => {
  return (
    <input
      className="px-3 py-2 mb-3 rounded-lg"
      ref={ref}
      placeholder={placeholder}
    />
  );
};
const forwardInput = forwardRef(ForwardRefComp);

export default forwardInput;
