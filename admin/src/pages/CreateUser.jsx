import React from 'react'

export default function CreateUser() {

  const labelStyle = 'text-gray-400 font-semibold mt-2';
  const inputStyle = 'mt-1 p-2  border-2 rounded-md w-[70%]'
  return (
    <div className='p-8  w-[82%]'>
      <h1 className='text-3xl font-bold'>New User</h1>
      <form action="#" method="post" className='grid grid-cols-2 gap-2 mt-5 '>
        <div>
          <label for="username" className='text-gray-400 font-semibold mt-2'>Username</label><br />
          <input type="text" id="username" name="username" placeholder='username' required className='mt-1 p-2  border-2 rounded-md w-[70%]' />
        </div>
        <div>
          <label for="fullName" className={labelStyle}>Full Name</label><br />
          <input className={inputStyle} placeholder='Full Name' type="text" id="fullName" name="fullName" required />
        </div>
        <div>
          <label className={labelStyle} for="email">Email</label><br />
          <input className={inputStyle} placeholder='email' type="email" id="email" name="email" required />
        </div>
        <div>
          <label className={labelStyle} for="password">Password</label><br />
          <input className={inputStyle} placeholder='password' type="password" id="password" name="password" required />
        </div>
        <div>
          <label className={labelStyle} for="phone">Phone</label><br />
          <input className={inputStyle} placeholder='phone' type="tel" id="phone" name="phone" required />
        </div>
        <div>
          <label className={labelStyle} for="address">Address</label><br />
          <input className={inputStyle} placeholder='phone' type="text" id="address" name="address" required />
        </div>
        <div>
          <label className={labelStyle}>Gender:</label>
          <div className='mt-6 flex items-center'>
            <div className='mr-4'>
              <input type="radio" id="male" name="gender" value="male" className='mr-2'/>
              <label for="male" className='text-gray-600'>Male</label>
            </div>
            <div>
              <input type="radio" id="female" name="gender" value="female" className='mr-2'/>
              <label for="female" className='text-gray-600'>Female</label>
            </div>



          </div>
        </div>
        <div>
          <label for="status" className={labelStyle}>Active</label><br/>
          <select id="status" name="status" required className={inputStyle}>
            <option value="active">Yes</option>
            <option value="notActive">No</option>
          </select>
        </div>
        <button type="submit" className=' bg-blue-700 hover:bg-blue-800 w-[200px] text-white font-semibold mt-4 p-1 text-center rounded-md'>Create</button>
      </form>
    </div>
  )
}
