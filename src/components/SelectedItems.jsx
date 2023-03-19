import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import Header from './Header';
import { useLocation } from 'react-router-dom';

export default function SelectedItems() {

    const location = useLocation()

    const columns = [
        { 
            field: 'name', 
            headerName: 'Name', 
            width: 400,
            sortable: false
        },
        { 
            field: 'price', 
            headerName: 'Price', 
            width: 400,
            sortable: false
        },
    ]

  return (
    <div>
        <Header/>
        <div className='table2'>
            <DataGrid
                rows={location.state.rowData}
                columns={columns}
                getRowId={(row) => row.id}
                hideFooter
                hideFooterPagination
                disableColumnMenu
            />
        </div>
        <h1>Total: Rs.{location.state.totalPrice}</h1>  
    </div>
  )
}
