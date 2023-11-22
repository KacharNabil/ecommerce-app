import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import { Badge } from '@mui/material';

const iconStyle='mr-5 cursor-pointer';

function TopNav() {
  return (
    <div className='p-3 px-5 bg-white flex justify-between items-center w-full h-[50px] sticky top-0 z-40'>
      <div>
        <h1 className='text-3xl font-bold '>Snow<span className='text-gray-400'>Admin</span></h1>
      </div>
      <div className='flex items-center '>
        <div className={iconStyle}>
        <Badge badgeContent={4} color="primary">
         <NotificationsNoneIcon/>
         </Badge>
        </div>
        <div  className={iconStyle}>
        <Badge badgeContent={4} color="primary">
         <LanguageIcon/>
         </Badge>
        </div>
        <div className='cursor-pointer'>
          <SettingsIcon/>
        </div>
      </div>
    </div>
  )
}

export default TopNav
