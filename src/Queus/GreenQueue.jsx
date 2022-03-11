import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

/* 
{"green": [{id: 'uniqueInt','name': '' }...], 
"red": [], 
"yellow": []
}
*/

const columns = [
  { field: 'id', headerName: 'id', width: 70 },
  { field: 'firstName', headerName: 'first name', width: 130 },
];

const rows = [
  { id: 1, firstName:'name'}, 
  { id: 2, firstName:'name'}, 
  { id: 3, firstName:'name'}, 
];

export default function GreenQueue() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        autoHeight
        autoWidth
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
