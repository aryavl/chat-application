import { SearchIcon } from "@/utils/icons";
import Image from "next/image";
import React from "react";

const Searchbar = ({
  user,
}: {
  user: {
    _id: string | undefined;
    imageId: string | undefined;
    name: string | undefined;
    email: string | undefined;
    messages: any[];
  };
}) => {
  console.log(user);
  const userdata:any = localStorage.getItem('user')
  var storedUser = JSON.parse(userdata);
  console.log(storedUser);
  return (
    <div className="flex gap-4">
      <div className="avatar online">
        <div className="w-12 rounded-full ring">
            <Image src={storedUser?.imageId || ""} width={256} height={256} alt="avatar"/>
        </div>
      </div>
      <div className="relative w-full">
        <input type="text" name="" id="" placeholder="search" className="input pl-12 rounded-full input-bordered w-full bg-gray-100 placeholder:text-gray-500"/>
        <div className="w-6 h-6 absolute top-1/2 left-5 -translate-x-1/2 -translate-y-1/2 ">

        <SearchIcon/>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
