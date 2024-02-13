import React from "react";

const styles = {
  h1: "text-2xl font-semibold",
  h2: "text-xl font-semibold",
  h3: "text-lg font-semibold",
  h4: "text-base font-semibold",
  p: "text-sm font-semibold",
};
function Heading({ children, type, className }) {
  const Type = type;
  const style = styles[type];
  return <Type className={`${style} ${className}`}>{children}</Type>;
}

export default Heading;

Heading.defaultProps = {
  type: "h2",
  className: "",
};
