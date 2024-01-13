import Messages from '@/components/Chat-Threads/Messages'
import SideNavbar from '@/components/Sidebar/SideNavbar'
import React from 'react'

const Chat = () => {
  return (
    <div className=' min-h-screen'>
      <div className='mx-auto flex'>
        {/* sidebar */}
        <SideNavbar/>
        {/* messages */}
        <Messages/>
      </div>
    </div>
  )
}

export default Chat