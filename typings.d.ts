interface AvatarProps{
    avatarId:string
    setAvatar:(id:string)=>void
}
 interface UserState {
    myUser: undefined | any;
    setUser: (user: any) => void;
  }
  
  interface UserProps {
    _id: string | undefined;
    imageId: string | undefined;
    name: string | undefined;
    email: string | undefined;
    messages: [
      {
        message:string,
        sender:string,
        receiver:string,
        time:Date
      }
    ];
  }

  interface SelectedUserStateProps{
    selectedUser: undefined | any;
    setSelectedUser: (user: any) => void;
  }