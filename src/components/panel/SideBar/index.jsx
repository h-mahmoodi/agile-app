import React from "react";
import Flex from "../../Flex";
import Heading from "../../Heading";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../Button";
import { userActions } from "../../../store/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import SidebarMenu from "../SidebarMenu";
import SidebarMenuItem from "../SidebarMenuItem";

function Sidebar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.setItem("user_token", "");
    dispatch(userActions.logout());
    toast.success("Log out successfully");
    navigate("/login");
  };
  return (
    <aside className="row-span-1 bg-slate-800 shadow-md ">
      <Flex direction="col" gap={5}>
        {/* <Flex
          direction="col"
          justify="center"
          align="center"
          gap={1}
          className="w-full bg-indigo-800 p-3 rounded-md text-slate-50"
        >
          <Heading type="h2">{user.name}</Heading>
          <Heading type="p">{user.email}</Heading>
          <div className="mt-4">
            <Button size="md" btnStyle="orange" onClick={handleLogOut}>
              Log out
            </Button>
          </div>
        </Flex> */}

        <SidebarMenu>
          <SidebarMenuItem link="" label="Panel Overview" />
          <SidebarMenuItem link="board" label="Job Board" />
          <SidebarMenuItem link="setings" label="Settings" />
        </SidebarMenu>
      </Flex>
    </aside>
  );
}

export default Sidebar;
