import React from "react";

const paddings = {
  xs: "p-1",
  sm: "p-2",
  md: "p-3",
  lg: "p-4",
  xl: "p-5",
};

const roundeds = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
};

const bgcolors = {
  primary: "bg-slate-800",
  primary_light: "bg-slate-700",
  primary_dark: "bg-slate-900",
};

function Box({ children, className, padding, bgColor, rounded, onClick }) {
  return (
    <div
      className={`${bgcolors[bgColor]} ${paddings[padding]} ${roundeds[rounded]} shadow-lg  text-slate-50 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Box;

Box.defaultProps = {
  padding: "md",
  bgColor: "primary",
  roundeds: "md",
  className: "",
};
