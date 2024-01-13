"use client"
import { fetchMessages } from '@/libs/fetchers'
import { useMessages, useSelectedUser, userUser } from '@/store/userStore'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import React, { useEffect } from 'react'
import { shallow } from 'zustand/shallow'
import MessageItem from './MessageItem'

const MessageList = () => {
    const sender = userUser((state:any)=>state.myUser)
    const receiver = useSelectedUser((state:any)=>state.selectedUser)
    const {messages,setMessages} = useMessages((state:any)=>({
        messages:state.messages,
        setMessages:state.setMessages
    }),shallow)

    const [parent] = useAutoAnimate()

    useEffect(()=>{
        
        fetchMessages(sender,receiver,setMessages)
    },[receiver])
  return (
    <div ref={parent} className=' overflow-auto w-full mb-10 flex flex-col max-h-[75vh] no-scrollbar' >
      {
        messages? 
        messages.map((item:any,i:number)=>{
          // message item
              <MessageItem key={i}
              user={sender.email === item?.sender?true:false}
              message={item.message}
              />
        }):""
      }
    </div>
  )
}

export default MessageList