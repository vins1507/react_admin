import './ProductList.css'
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material';
import { productRows } from '../../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function ProductList() {

    const[data,setData]=useState(productRows);

    const handleDelete=(id)=>{
        setData(data.filter((item)=>item.id !==id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'prodcut', headerName: 'Product', width: 200, renderCell: (params)=>{
            return (
                <div className='productListItem'>
                    <img src={params.row.img} alt="" className="productListImg" />
                    {params.row.name}
                </div>
            )
        } },
        { field: 'stock', headerName: 'Stock', width: 170 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 190,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 160, renderCell: (params)=>{
              return(
                  <>
              <Link to={'/product/'+params.row.id}>
                  <button className='productlistEdit'>
                      Edit
                  </button>
                </Link>  
                  <DeleteOutline className='productlistDelete' onClick={()=>handleDelete(params.row.id)} />
                  </>
              )
          }
        }
  
      ];

    return (
        <div className='productlist'>
            <DataGrid rows={data} 
            disableSelectionOnClick 
            columns={columns} pageSize={8} 
            rowsPerPageOptions={[5]} checkboxSelection/>
        </div>
    )
}
