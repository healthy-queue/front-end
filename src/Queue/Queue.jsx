import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import ReassignmentModal from './ReassignmentModal.jsx'

const columns = [
  { field: 'id', headerName: 'id', width: 70 },
  { field: 'first_name', headerName: 'First Name', width: 130 },
  { field: 'last_name', headerName: 'Last Name', width: 130 },
  { field: 'date_of_birth', headerName: 'D.O.B', width: 130 },
  { field: 'primary_ailment', headerName: 'Notes', width: 130 },
  { field: "button",
    headerAlign: 'center',
    align: "center",
    headerName: "",
    type: "number",
    width: 130,
    disableClickEventBubbling: true,
    renderCell: (field) => < ReassignmentModal />
  }
];

// // Mock Data
// const rows = [
//   { id: 1, first_name:'name'}, 
//   { id: 2, first_name:'name'}, 
//   { id: 3, first_name:'name'}, 
// ];

const Queue = ({ data }) => {
  return (
    <div style={{ minHeight: 400, width: '100%' }}>
      <DataGrid
        autoHeight
        autoWidth
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
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

export default Queue;
