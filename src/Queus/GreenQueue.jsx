import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'id', width: 70 },
  { field: 'firstName', headerName: 'first name', width: 130 },

];
const rows = [
  { id: 1}, 
  { id: 2}, 
  { id: 3}, 
];

export default function GreenQueue() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        autoHeight
        rows={rows}
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
