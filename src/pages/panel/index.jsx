import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";

function Panel() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  //   if (!user.name && !user.email) {
  //     redirect("/login");
  //   }

  useEffect(() => {
    if (!user.name && !user.email) {
      navigate("/login");
    }
  }, [navigate, user]);

  return <div>Panel</div>;
}

export default Panel;
