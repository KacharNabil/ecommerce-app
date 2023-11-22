import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';


export default function User() {

    const inputStyle = "mt-1 border  border-y-2 border-x-0 border-t-0 border-gray-400 p-1";
    return (
        <div className='p-8 w-[82%]'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-3xl font-bold'>Edit User</h1>
                </div>
                <div>
                    <Link to={'/newuser'} className='bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-semibold'>Create</Link>
                </div>
            </div>
            <div className='flex item-center mt-6 gap-4'>
                <div className='w-[40%] rounded-md shadow-xl p-12'>
                    <div className='flex items-center gap-4'>
                        <Avatar>H</Avatar>
                        <div>
                            <span className='text-lg font-semibold'>Nabil Kachar</span>
                            <p className='text-sm font-thin text-gray-500'>Software Engineer</p>
                        </div>
                    </div>
                    <h3 className='mt-4 font-semibold text-gray-400'>Accout Details</h3>
                    <div className='flex items-center mt-4'>
                        <PersonOutlineOutlinedIcon />
                        <span className='ml-2'>Nabil kachar</span>
                    </div>
                    <div className='flex items-center mt-4'>
                        <CalendarTodayOutlinedIcon />
                        <span className='ml-2'>07.02.2003</span>
                    </div>
                    <h3 className='mt-4 font-semibold text-gray-400'>Contact Details</h3>
                    <div className='flex items-center mt-4'>
                        <PhoneAndroidOutlinedIcon />
                        <span className='ml-2'>+212 770378917</span>
                    </div>
                    <div className='flex items-center mt-4'>
                        <AlternateEmailOutlinedIcon />
                        <span className='ml-2'>nabilkachar03@gmail.com</span>
                    </div>
                    <div className='flex items-center mt-4'>
                        < FmdGoodOutlinedIcon />
                        <span className='ml-2'>Tanger | MA</span>
                    </div>



                </div>
                <div className='w-[60%] rounded-md shadow-xl p-12 '>

                    <h1 className='text-xl font-bold'>Edit</h1>
                    <form action="#" method="post" className='mt-5 flex gap-4' >
                        <div className='w-[80%]'>
                            <div className='mt-2' >
                                <label for="username">Username</label><br />
                                <input className={inputStyle} type="text" id="username" name="username" placeholder='Nabil kachar' required />
                            </div>
                            <div className='mt-2'>
                                <label for="fullName">Full Name</label><br />
                                <input className={inputStyle} type="text" id="fullName" name="fullName" placeholder='Nabil Kachar' required />
                            </div>
                            <div className='mt-2'>
                                <label for="email">Email</label><br />
                                <input className={inputStyle} type="email" id="email" name="email" placeholder='nabilkachar03@gmail.com' required />
                            </div>
                            <div className='mt-2'>
                                <label for="phone">Phone</label><br />
                                <input className={inputStyle} type="tel" id="phone" name="phone" placeholder='+212 770378917' required />
                            </div>
                            <div className='mt-2'>
                                <label for="address">Address</label><br />
                                <input className={inputStyle} type='text' id="address" name="address" placeholder='Tanger | MA' required />
                            </div>
                        </div>
                        <div className='w-[20%] flex flex-col justify-between'>
                            <div>
                                <label htmlFor="file" >
                                    <FileUploadOutlinedIcon className='cursor-pointer'/>
                                </label>
                                <input id='file' type="file" className='hidden' />
                            </div>
                            <button type="submit" className='bg-blue-700 p-1 rounded-md text-white font-semibold'>Submit</button>
                        </div>

                    </form>




                </div>
            </div>
        </div>
    )
}
