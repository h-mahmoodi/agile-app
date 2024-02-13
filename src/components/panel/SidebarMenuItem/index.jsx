import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../../Icon";

function SidebarMenuItem({ label, link }) {
  return (
    <NavLink
      end
      to={link}
      className={({ isActive }) =>
        `p-5 text-sm ${
          isActive
            ? "bg-slate-900 text-gray-50 hover:bg-slate-900 border-r-4 border-indigo-800"
            : "hover:bg-slate-700 hover:text-gray-50"
        } `
      }
    >
      <span className="font-semibold">{label}</span>
    </NavLink>
  );
}

export default SidebarMenuItem;
