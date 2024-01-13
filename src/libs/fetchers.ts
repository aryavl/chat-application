import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleSubmit = async (
  e: any,
  router: AppRouterInstance,
  avatarId: string,
  setUser:{ (user: any):void;(arg0:any):void }
) => {
  e.preventDefault();
  try {
    console.log("fff");
    const response = await fetch(`http://localhost:3001/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target[0].value,
        email: e.target[1].value,
        imageId: `https://robohash.org/${avatarId}`,
      }),
    //  credentials:'include'
    });
    const {user,accessToken}= await  response.json()
  //  console.log(user);
  let userData = JSON.stringify(user);
    localStorage.setItem("token",accessToken)
    localStorage.setItem("user",userData)
    setUser(user)
    if(localStorage.getItem("user")){

      router.push("/chat");
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchUsers=async(myself:UserProps,setUsers:any)=>{
  const userData:any = localStorage.getItem('user')
  const parseUserdata= JSON.parse(userData)
  console.log(parseUserdata?.email);
  const data = await fetch(`http://localhost:3001/users`)
const myUsers = await data.json()
setUsers(myUsers.filter((user:any)=>user.email !== parseUserdata?.email))
}


export const fetchUser=async (setUser:{ (user: any):void;(arg0:any):void })=> {
  try {
    const userData:any = localStorage.getItem('user')
    const parseUserdata= JSON.parse(userData)
    console.log(parseUserdata?.email);
    
    const response = await fetch(`http://localhost:3001/user?email=${parseUserdata?.email}`)
    const user = await response.json()
    setUser(user)
  } catch (error:any) {
    console.error(error.message);  
  }
}

export const fetchMessages=async(sender:any,receiver:any,setMessages:any)=>{
if(sender && receiver){
try {
  const res= await fetch(`http://localhost:3001/messages?sender=${sender?.email}&receiver=${receiver.email}`)
  const data = await res.json()
  setMessages(data)
} catch (error:any) {
  console.error(error.message);
  setMessages(null)
}
}
}

