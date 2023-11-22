import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from '../data/data';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';



export default function Users() {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    }
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params) => {
                return (
                    <div> {params.row.username}</div>
                );
            },
        },
        { field: "email", headerName: "Email", width: 200 },
        {
            field: "status",
            headerName: "Status",
            width: 250,
        },
        {
            field: "transaction",
            headerName: "Transaction Volume",
            width:200,
        },
        {
            field: "action",
            headerName: "Action",
            width: 100,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className='bg-green-500 hover:bg-green-600 rounded-md px-2 py-1 mr-2 text-white font-semibold'>Edit</button>
                        </Link>
                        <DeleteOutlineIcon
                        
                            className="text-red-500 hover:text-red-600 cursor-pointer"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        
        <div className=' w-[82%] h-full flex items-center justify-center mx-auto mt-12 '>
        <DataGrid
        
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
      
    )
}
