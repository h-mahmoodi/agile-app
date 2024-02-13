import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/site/HomePage";
import LoginPage from "../pages/site/LoginPage";
import RegisterPage from "../pages/site/RegisterPage";
import Panel from "../pages/panel";
import PanelLayout from "../pages/panel/Layout";
import OverViewPage from "../pages/panel/OverViewPage";
import BoardPage from "../pages/panel/BoardPage";

function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      <Route path="/panel" element={<PanelLayout />}>
        <Route index element={<OverViewPage />} />
        <Route path="board" element={<BoardPage />} />
      </Route>

      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
}

export default Router;
