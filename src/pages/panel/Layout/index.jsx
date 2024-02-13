import React from "react";
import Header from "../../../components/panel/Header";
import Sidebar from "../../../components/panel/SideBar";
import Footer from "../../../components/panel/Footer";
import { Outlet } from "react-router-dom";

function PanelLayout() {
  return (
    <section className="grid grid-cols-[17rem,1fr] grid-rows-[auto,1fr,auto] h-screen">
      <Header />
      <Sidebar />
      <main className="bg-slate-600 ">
        <Outlet />
      </main>
    </section>
  );
}

export default PanelLayout;
