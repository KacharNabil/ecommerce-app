import React from 'react'
import Feature from '../components/Feature'
import Chart from '../components/Chart'
import { UserData } from '../data/data'
import WidgetLg from '../components/WidgetLg'
import WidgetSm from '../components/WidgetSm'

const data =[{
    key:1,
    title: 'Revenue',
    amount: 2415,
    change:-11.4
},
{
    key:2,
    title: 'Sales',
    amount: 2415,
    change:-11.4
},
{
    key:3,
    title: 'Cost',
    amount: 2415,
    change:-11.4
},
]
const newMember =[
    {
        id:1,
        avatar:'N',
        name:'Nabil Kachar',
        role:'Software Engineer'

    },
    {
        id:2,
        avatar:'N',
        name:'Nabil Kachar',
        role:'Software Engineer'

    },
    {
        id:3,
        avatar:'N',
        name:'Nabil Kachar',
        role:'Software Engineer'

    },
    {
        id:4,
        avatar:'N',
        name:'Nabil Kachar',
        role:'Software Engineer'

    },

]


export default function Home() {
  return (
    <div className=' w-[82%] overflow-hidden '>
        <div className='p-5 flex justify-between'>
            {data.map((item)=>(
                <Feature data={item} key={item.key}/>
            ))}
        </div>
        <Chart data={UserData} title="User Analytics" grid dataKey="active User"/>
        <div className='flex  m-4 gap-4'>
            <WidgetSm data={newMember}/>
            <WidgetLg/>
        </div>
    </div>
  )
}
