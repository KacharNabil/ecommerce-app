import React from 'react'
import Avatar from '@mui/material/Avatar';
const Table = () => {
    // Sample data for the table
    const data = [
      { customer: 'John Doe', date: '2023-01-01', amount: 100, status: 'Paid' },
      { customer: 'Jane Doe', date: '2023-01-02', amount: 150, status: 'Pending' },
      { customer: 'Bob Smith', date: '2023-01-03', amount: 200, status: 'Paid' },
      { customer: 'Alice Johnson', date: '2023-01-04', amount: 120, status: 'Pending' },
    ];
  
    return (
      <div>
        <h2 className='text-xl font-bold mb-3'>Latest Transactions</h2>
        <table className='w-full'>
          <thead className=''>
            <tr className='text-left '>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className=''>
            {data.map((row, index) => (
              <TableRow key={index} {...row} />
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  const TableRow = ({ customer, date, amount, status }) => {
    return (
      <tr className=''>
        <td className='flex items-center mb-2 font-semibold'>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"  className='mr-3'/>
            {customer}
        </td>
        <td>{date}</td>
        <td>$ {amount}</td>
        <td >
            <span className='rounded-md bg-gray-200 px-3 py-2 text-gray-600 hover:bg-gray-300 '>{status}</span>
            
        </td>
      </tr>
    );
  };

export default function WidgetLg() {
  return (
    <div className='w-[70%] p-8 rounded-md shadow-2xl '>
         <Table />
    </div>
  )
}
