import { create } from "zustand";
import { createWithEqualityFn } from "zustand/traditional";

export const userUser = createWithEqualityFn<UserState>((set)=>(
    {
        myUser:undefined,
        setUser:(user)=>set({myUser:user})
    }
))
export const useAllUsers = createWithEqualityFn((set)=>(
    {
        users:undefined,
        setUsers:(users:any)=>set({users:users})
    }
))

export const useSelectedUser = createWithEqualityFn<SelectedUserStateProps>((set)=>(
    {
        selectedUser:undefined,
        setSelectedUser:(user)=>set({selectedUser:user})
    }
))

export const useMessages = createWithEqualityFn((set)=>({
    message:undefined,
    setMessages:(messages:any)=>set((messages))
}))