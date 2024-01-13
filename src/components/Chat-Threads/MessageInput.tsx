"use client";

import { SendMsIcon, SmileFaceIcon } from "@/utils/icons";
import dynamic from "next/dynamic";
import React, { useState } from "react";


const Picker = dynamic(
    ()=>{
        return import('emoji-picker-react')
    },
    {ssr:false}
)
const MessageInput = () => {
  const [inputValue, setInputValue] = useState<string >("");
  const [showEmojie,setShowEmojie] = useState<boolean>(false)
  
  const onEmojiClickhandler = (emojiObject: {emoji:string})=>{
setInputValue(pre=>pre + emojiObject.emoji)
setShowEmojie(!showEmojie)

  }
  const inputHandleSubmit=async(e:{preventDefault:()=>void})=>{
    e.preventDefault()
    setInputValue("")
    }
  return (
    <form onSubmit={inputHandleSubmit} className="mt-auto relative" >
      <div className=" w-full relative">
        <input
          type="text"
          name=""
          id=""
          placeholder="Message"
          className="input w-full pl-14 input-bordered"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
        />
      </div>
      <button
        className="absolute top-1/2 left-5 -translate-y-1/2"
        type="button"
        onClick={()=>setShowEmojie(!showEmojie)}
      >
        <SmileFaceIcon />
      </button>
      {
        showEmojie && <div className="absolute bottom-full">
                <Picker onEmojiClick={onEmojiClickhandler}/>
        </div>
      }
      <button
        type="submit"
        className="absolute right-5 top-1/2 -translate-y-1/2"
      >
        <SendMsIcon />
      </button>
    </form>
  );
};

export default MessageInput;
