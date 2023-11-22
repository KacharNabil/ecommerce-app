import React from 'react'
import Avatar from '@mui/material/Avatar';


export default function WidgetSm({ data }) {

  return (
    <div className='w-[35%] rounded-md shadow-2xl p-8'>

      <h3 className='text-xl font-bold mb-4'>New Join Members</h3>
      {data.map(item => (
        <div className='flex  items-center mb-4' key={item.id}>
          <div className='w-[20%]'>
            <Avatar>{item.avatar}</Avatar>
          </div>
          <div className='w-[60%]'>
            <span className='font-semibold'>{item.name}</span>
            <p className='text-sm text-gray-400'>{item.role}</p>
          </div>
          <div>

            <button className='bg-gray-200 px-2 py-1 rounded-md text-gray-600 hover:bg-gray-300 '>display</button>
          </div>
        </div>
      ))}

    </div>
  )
}
