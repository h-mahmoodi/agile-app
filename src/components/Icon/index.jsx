import React from "react";

const sizes = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  xl: "text-xl",
  xxl: "text-2xl",
};

function Icon({ icon, size }) {
  return <i className={`${icon} ${sizes[size]} flex text-slate-300`}></i>;
}

export default Icon;
