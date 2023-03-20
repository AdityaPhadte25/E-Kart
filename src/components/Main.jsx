import React,{useState,useEffect} from 'react'
import Header from './Header'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { sumBy } from 'lodash';

// const data = {
//     'st': [
//         {id: 0, name: 'T-Shirt', brand: 'Levis',colour: 'Blue', price: 2000}, 
//         {id: 1, name: 'Jeans', brand: 'Pepe', colour: 'Black', price: 6000}, 
//         {id: 2, name: 'Cap', brand: 'H&M', colour: 'White', price: 1000}, 
//         {id: 3, name: 'Goggles', brand: 'LensKart', colour: 'Gold', price: 5000}, 
//         {id: 4, name: 'Smart Watch', brand: 'Samsung', colour: 'Black', price: 16000}, 
//         {id: 5, name: 'Jacket', brand: 'Polo', colour: 'Blue', price: 2500} 
//     ]
// }

const apiData = { 
    'st': { 
    '1' : {name: 'T-Shirt', brand: 'Levis',colour: 'Blue', price: 2000}, 
    '2' : {name: 'Jeans', brand: 'Pepe', colour: 'Black', price: 6000}, 
    '3' : {name: 'Cap', brand: 'H&M', colour: 'White', price: 1000}, 
    '4' : {name: 'Goggles', brand: 'LensKart', colour: 'Gold', price: 5000}, 
    '5' : {name: 'Smart Watch', brand: 'Samsung', colour: 'Black', price: 16000}, 
    '6' : {name: 'Jacket', brand: 'Polo', colour: 'Blue', price: 2500} 
   } 
} 

export default function Main() {

    const navigate = useNavigate()

    // const [tableData, setTableData] = useState(data.st)
    const [gridData,setGridData] = useState([])
    const [selectedRowData,setSelectedRowData] = useState([])
    const [selectedRows,setSelectedRows] = useState(0)
    const [totalPrice,setTotalPrice] = useState(0)

    useEffect(() => {
      dataChange()
    }, [])
    
    const dataChange = () => {
        let myData = Object.values(apiData.st).map((values,index) => {
            return {...values,id: index + 1}
        })
        setGridData(myData)
    }

    const rowSelection = (id) => {
        setSelectedRows(id)
        const filteredData = id.map((id) => gridData.find((row) => row.id === id))
        setSelectedRowData(filteredData)
        const sum = sumBy(filteredData,function(value){
            return value.price
        })
        setTotalPrice(sum)
    }

    const handlePayment = () => {
        navigate("/payment",{state:{rowData: selectedRowData,totalPrice : totalPrice}})
    }

    const customFooter = () => {
        return (
           selectedRows.length > 0 ? <h3 className='total'>Total: Rs.{totalPrice}</h3> : <></>   
        )
    }
    
    const columns = [
        { 
            field: 'name', 
            headerName: 'Name', 
            width: 400,
            sortable: false
        },
        { 
            field: 'brand', 
            headerName: 'Brand', 
            width: 400,
            sortable: false
        },
        {
            field: 'colour',
            headerName: 'Color',
            width: 380,
            sortable: false
        },
        {
            field: 'price',
            headerName: 'Price',
            sortable: false
        },
      ];

  return (
    <div>
        <Header/>
        <div className='table'>
            <DataGrid
                rows={gridData}
                columns={columns}
                checkboxSelection
                getRowId={(row) => row.id}
                hideFooterPagination
                disableColumnMenu
                onRowSelectionModelChange={(id) => rowSelection(id)}
                slots={{footer: customFooter}}
            />
        </div>
        {
            selectedRows.length > 0 
            ? 
            <div className="payButton"> 
            <Button variant="contained" onClick={() => handlePayment()}>
                Go To Pay
            </Button> 
            </div>
            : 
            <></>
        }
    </div>
  )
}
