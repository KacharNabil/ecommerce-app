import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import CasesOutlinedIcon from '@mui/icons-material/CasesOutlined';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { Link } from 'react-router-dom';


const data = [{
    key: 1,
    name: 'Dashboard',
    list: [
        {
            id: 1,
            content: <Link to={'/'}>Home</Link>,
            icon: <HomeOutlinedIcon className='text-gray-400 mr-2 !important' />
        },
        {
            id: 2,
            content: 'Analytics',
            icon: <TimelineIcon className='text-gray-400 mr-2 !important' />
        },
        {
            id: 3,
            content: 'Sales',
            icon: <TrendingUpIcon className='text-gray-400 mr-2 !important' />
        }
    ]
},
{
    key: 2,
    name: 'Quick Menu',
    list: [
        {
            id: 1,
            content: <Link to={'/users'}>Users</Link>,
            icon: <PersonOutlineIcon className='text-gray-400 mr-2 !important' />
        },
        {
            id: 2,
            content: <Link to={'/products'}>Products</Link>,
            icon: <StorefrontIcon className='text-gray-400 mr-2 !important' />
        },
        {
            id: 3,
            content: 'Transactions',
            icon: < AttachMoneyIcon className='text-gray-400 mr-2 !important' />
        },
        {
            id: 4,
            content: 'Reports',
            icon: <BarChartIcon className='text-gray-400 mr-2 !important' />
        }
    ]
},
{
    key: 3,
    name: 'Notifications',
    list: [
        {
            id: 1,
            content: 'Mail',
            icon: <MailOutlineIcon className='text-gray-400 mr-2 !important' />
        },
        {
            id: 2,
            content: 'Feedback',
            icon: <DynamicFeedIcon className='text-gray-400 mr-2 !important' />
        },
        {
            id: 3,
            content: 'Messages',
            icon: < ChatOutlinedIcon className='text-gray-400 mr-2 !important' />
        }
    ]
}
    ,
{
    key: 4,
    name: 'Staff',
    list: [
        {
            id: 1,
            content: 'Manage',
            icon: <CasesOutlinedIcon className='text-gray-400 mr-2 !important' />
        },
        {
            id: 2,
            content: 'Analytics',
            icon: <TimelineIcon className='text-gray-400 mr-2 !important' />
        },
        {
            id: 3,
            content: 'Reports',
            icon: < FeedbackIcon className='text-gray-400 mr-2 !important' />
        }
    ]
}
]
const liStyle = 'mb-1 flex items-center hover:bg-gray-200 rounded-md px-2 py-1 cursor-pointer'
export default function SideNav() {
    return (
        <div className='w-[18%] h-screen p-4 bg-slate-100 shadow-md rounded-r-md sticky top-[50px] '>
            
            {data.map(({ key, name, list }) => (
                <div key={key}>
                    <h3 className='text-gray-400 font-bold'>{name}</h3>
                    <ul className='py-2 px-5'>
                        {list.map(({ id, content, icon }) => (
                            <li key={id} className={liStyle}>
                                {icon}
                                {content}
                            </li>
                        ))}
                    </ul>
                </div>
                
            ))}

        </div>
    );
}
