import React from "react";

const bgColors = {
  slate: "bg-slate-800",
  slate_700: "bg-slate-700",
  red: "bg-red-600",
  orange: "bg-orange-600",
  emerald: "bg-emerald-600",
};

function Badge({ bgColor, label, className }) {
  return (
    <span
      className={`py-1 px-2  text-slate-50 rounded-md text-xs ${bgColors[bgColor]} ${className}`}
    >
      {label}
    </span>
  );
}

export default Badge;

Badge.defaultProps = {
  bgColor: "slate",
  label: "badge",
};
