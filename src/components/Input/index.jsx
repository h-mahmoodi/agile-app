import React from "react";
import Spinner from "../Spinner";
import Flex from "../Flex";

const widths = {
  sm: "w-24",
  md: "w-44",
  lg: "w-64",
  full: "w-full",
};

const styles = {
  normal: " border-2 border-slate-400",
  error: " border-2 border-red-600",
};

function Input({ label, id, error, width, icon, type, ...props }) {
  //   console.log(error);
  const hasError = error ? "error" : "normal";
  return (
    <div className={`flex flex-col relative ${widths[width]}`}>
      <Flex justify="between">
        <label htmlFor={id}>{label}</label>
        {error && <span className=" text-sm text-red-500">{error}</span>}
      </Flex>
      <input
        id={id}
        type={type}
        {...props}
        className={`bg-slate-600  py-2 px-2 ${styles[hasError]} rounded-md focus:outline-none w-full  focus:border-indigo-400 `}
      />

      <span className="absolute right-2 top-8 text-lg text-slate-300">
        {icon && <i className={`${icon} flex`}></i>}
      </span>
    </div>
  );
}
export default Input;

Input.defaultProps = {
  id: "id",
  label: "label",
  error: "",
  width: "md",
  type: "text",
};
