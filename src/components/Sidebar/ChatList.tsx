"use client"
import { fetchUsers } from '@/libs/fetchers';
import { useAllUsers, userUser } from '@/store/userStore';
import React, { useEffect } from 'react'
import { shallow } from 'zustand/shallow';
import ChatItem from './ChatItem';

const ChatList = ({
    mySelf,
  }: {
    mySelf: {
      _id: string | undefined;
      imageId: string | undefined;
      name: string | undefined;
      email: string | undefined;
      messages: any[];
    };
  }) => {
    const { users, setUsers } = useAllUsers(
      (state:any) => ({ users: state.users, setUsers: state.setUsers }),
      shallow
    );
    console.log(users);
    useEffect(()=>{
      fetchUsers(mySelf,setUsers)
      console.log(users);
      
    },[])
  return (
    <div className='my-5 flex flex-col'>
      {/* chat item */}
      {
        users?(
          users?.reverse()?.map((user:any)=><ChatItem key={user._id} user={user}/>)
          
        ):(
          <span className='loading loading-ring w-16'></span>
        )
      }
    </div>
  )
}

export default ChatList