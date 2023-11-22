import React ,{useState} from 'react'
import { productRows } from '../data/data';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function Products() {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    }
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "product",
            headerName: "Product",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className='flex items-center gap-4'>
                        <img src={params.row.img} className='rounded-full h-[35px] w-[35px]' alt="" />
                        {params.row.name}
                    </div>
                );
            },
        },
        { field: "stock", headerName: "Stock", width: 200 },
        {
            field: "status",
            headerName: "Status",
            width: 250,
        },
        {
            field: "price",
            headerName: "Price",
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 100,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
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
