import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import SmallButton from './Button'
import { classes } from '../Constants/theme'


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'dob', headerName: 'D.O.B.', type: 'string', width: 90 },
  { field: 'email', headerName: 'Email', type: 'string', width: 90 },
  { field: 'carrier', headerName: 'Carrier', type: 'string', width: 90 },
  { field: 'group', headerName: 'Group', type: 'string',width: 90 },
  { field: 'created', headerName: 'Created', type: 'number', width: 90 },
  { field: 'updated', headerName: 'Updated', type: 'number', width: 90 },
  { field: 'button', 
    headerName: 'edit', 
    type: 'number',
    renderCell: () => (<SmallButton />),
    width: 90, 
    // disableClickEventBubbling: true 
  }
];

// have function that injects data 

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', dob: '1-1-01', email: 'js@aol.com', carrier: 'BCBS', group: '1234A', created: '20:15:45', updated: '20:15:45'},
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', dob: '7-3-99', email: 'cl@aol.com', carrier: 'Aetna', group: '1234A', created: '20:15:45', updated: '20:15:45' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', dob: '1-13-88', email: 'jl@aol.com', carrier: 'Kaiser', group: '1234A', created: '20:15:45', updated: '20:15:45' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', dob: '1-7-21', email: 'as@aol.com', group: '1234A', carrier: 'Aetna', created: '20:15:45', updated: '20:15:45' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', dob: '3-1-67', email: 'dt@aol.com', carrier: 'Aetna', group: '1234A', created: '20:15:45', updated: '20:15:45' },
  { id: 6, lastName: 'Melisandre', firstName: null, dob: '1-1-21', email: 'mm@aol.com', carrier: 'Aetna',group: '1234A', created: '20:15:45', updated: '20:15:45' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', dob: '7-1-13', email: 'js@aol.com', carrier: 'Aetna',group: '1234A', created: '20:15:45', updated: '20:15:45' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', dob: '1-1-01', email: 'js@aol.com', carrier: 'Aetna',group: '1234A', created: '20:15:45', updated: '20:15:45' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', dob: '1-7-21', email: 'js@aol.com', carrier: 'Aetna',group: '1234A', created: '20:15:45', updated: '20:15:45' }
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        sx={{
          borderRadius: 3,
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
        }}
      />
    </div>
  );
}
