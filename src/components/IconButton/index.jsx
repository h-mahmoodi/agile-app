import React from "react";
import Icon from "../Icon";

function IconButton({ icon, size, ...props }) {
  return (
    <button
      className="bg-slate-900 p-2 rounded-md hover:bg-indigo-700"
      {...props}
    >
      <Icon icon={icon} size={size} />
    </button>
  );
}

export default IconButton;
