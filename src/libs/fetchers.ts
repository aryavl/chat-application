import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleSubmit=async(e:any,router: AppRouterInstance)=>{
    e.prevntDefault()
    try {
        
    } catch (error) {
        console.log(error);
        
    }
}