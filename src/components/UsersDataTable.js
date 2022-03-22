import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'firstname', headerName: 'First name', width: 130 },
    { field: 'lastname', headerName: 'Last name', width: 130 },
    { field: 'country', headerName: 'Country', width: 100 },
    { field: 'city', headerName: 'City', width: 130 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phonenum', headerName: 'Phone Number', type: 'number', width: 130 },
    { field: 'jobtitle', headerName: 'Job Title', width: 150 },
    { field: 'yearsofexp', headerName: 'Years Of Experience', width: 150 }
];


const UsersDataTable = ({users}) => {
    

    return (
        <>
            <p className='text-white'>Database</p>
            <div className='w-4/5 h-[450px] mb-10'>
                <div className='w-full h-full bg-white p-5 shadow-lg rounded-xl'>
                    <DataGrid
                        sx={{
                            '& .super-app-theme--junior': {
                                bgcolor: '#f5d136',
                                '&:hover': {
                                    bgcolor: '#e9c016',
                                },
                            }
                        }}
                        getRowClassName={(params) => params.row.yearsofexp < 1 ? 'super-app-theme--junior' : ''}
                        rows={users}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                    />
                </div>
            </div>
        </>
    )
}

export default UsersDataTable