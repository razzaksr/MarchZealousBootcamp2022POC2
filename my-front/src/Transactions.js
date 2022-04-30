import { Autocomplete } from '@mui/material';
import { maxHeight, maxWidth } from '@mui/system';
import { DataGrid, MAX_PAGE_SIZE } from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { display, fetchTrans, gets } from './Connect';
export const Transactions=()=>{

    const hey=async()=>{
        const t = Number(localStorage.getItem("loggedperson"))
        const all=await display(t);
        setArr(all.data)
    }

    useEffect(()=>{
        hey()
    },[])

    const columns = [
        { field: 'id', headerName: 'ID', width: 200 },
        { field: 'amount', headerName: 'Amount', width: 200 },
        { field: 'dot', headerName: 'Date of the Transaction', width: 300 },
        {
          field: 'type',
          headerName: 'Transaction Type',
          width: 200,
        }
      ];

    const[arr,setArr]=useState([])

    return(<>
        <div className="row justify-content-center">
            <div style={{ height: 500, width: '100%' }}>
                <DataGrid
                    columns={columns}
                    rows={arr}
                    pageSize={7}
                    rowsPerPageOptions={[7]}
                />
            </div>
        </div>
    </>)
}