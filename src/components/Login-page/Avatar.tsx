"use client" 

import Image from 'next/image'
import React from 'react'

const Avatar = ({avatarId,setAvatar}:AvatarProps) => {
  return (
    <div onClick={()=>setAvatar((Math.random()*20).toFixed())} className='avatar cursor-pointer mx-auto mb-5 tooltip' data-tooltip="Click to regenerate avatar">
        <div className='w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
            <Image src={`https://robohash.org/${avatarId}.png`} width={256} height={256} alt='avatar'/>
        </div>
    </div>
  )
}

export default Avatar