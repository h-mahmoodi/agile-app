import React from "react";
import { Link } from "react-router-dom";

const styles = {
  indigo: "bg-indigo-700 text-white hover:bg-indigo-800 ",
  orange: "bg-orange-600 text-white hover:bg-orange-700 ",
  emerald: "bg-emerald-600 text-white hover:bg-emerald-700 ",
  dark: "bg-slate-600 text-white hover:bg-slate-700 ",
  light: "bg-slate-200 text-slate-800 hover:bg-slate-700 hover:text-slate-100",
  red: "bg-red-600 text-slate-50 hover:bg-red-700 hover:text-slate-50",
};

const sizes = {
  md: "py-2 px-4 rounded-md",
  sm: "py-1 px-2 rounded-md",
};

function Button({ children, link, btnStyle, size, className, ...props }) {
  if (link) {
    return (
      <Link
        to={link}
        className={`${styles[btnStyle]} ${sizes[size]} ${className} duration-200 text-center disabled:bg-slate-950 disabled:cursor-progress `}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      {...props}
      className={`${styles[btnStyle]} ${sizes[size]} ${className} duration-200 text-center disabled:bg-slate-900 disabled:cursor-progress`}
    >
      {children}
    </button>
  );
}

export default Button;

Button.defaultProps = {
  link: "",
  btnStyle: "light",
  size: "md",
  className: "",
};
