"use client";
import { fetchUser } from "@/libs/fetchers";
import { userUser } from "@/store/userStore";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { shallow } from "zustand/shallow";
import Searchbar from "./Searchbar";
import ChatList from "./ChatList";

const SideNavbar = () => {
  const { myUser, setUser } = userUser(
    (state) => ({ myUser: state.myUser, setUser: state.setUser }),
    shallow
  );
  console.log(myUser);
const userdata:any= localStorage.getItem('user')
JSON.parse(userdata)
  return (
    <div className="w-full md:!block sidebar z-10 border-r-2 border-slate-400 md:w-1/2 lg:w-1/3 p-3 bg-white h-screen overflow-scroll">
      {/* searchbar */}
      <Searchbar user={myUser}/>
      {/* chatlist */}
      {userdata && <ChatList mySelf={myUser}/> }
      {/* <ChatList mySelf={myUser}/> */}
    </div>
  );
};

export default SideNavbar;
