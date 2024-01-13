"use client" 
import React, { useState } from "react";
import Avatar from "./Avatar";
import { handleSubmit } from "@/libs/fetchers";
import { useRouter } from "next/navigation";
import { shallow } from "zustand/shallow";
import { userUser } from "@/store/userStore";

const Form = () => {
  const {myUser,setUser} = userUser((state)=>({myUser:state.myUser,setUser:state.setUser}),shallow)
 
    
  const [avatar,setAvatar]=useState((Math.random()*20).toFixed())
    const router = useRouter()
    return (
    <form onSubmit={(e)=>handleSubmit(e,router,avatar,setUser)} className="flex flex-col gap-5">
        <Avatar avatarId={avatar} setAvatar={setAvatar}/>
      <div className="flex flex-col xl:flex-row gap-5">
        <div className="form-control w-full">
          <label htmlFor="" className="label label-text text-lg">
            What is your name?
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Username"
            required
          />
        </div>
        <div className="form-control w-full">
          <label htmlFor="" className="label label-text text-lg">
            Put your email
          </label>
          <input
            type="email"
            className="input input-bordered w-full"
            placeholder="email"
            required
          />
        </div>
      </div>
      <button type="submit" className="btn bordered border-gray-600 text-white">Login</button>
    </form>
  );
};

export default Form;
