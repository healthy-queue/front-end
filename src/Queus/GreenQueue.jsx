import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import ReassignmentModal from '../Modals/ReassignmentModal.jsx'

/* 
{"green": [{id: 'uniqueInt','name': '' }...], 
"red": [], 
"yellow": []
}
*/

// use Dispatch to fetch current Green Queue
// onClick={() => dispatch(setActivePatient(item.id))}

const columns = [
  { field: 'id', headerName: 'id', width: 70 },
  { field: 'firstName', headerName: 'first name', width: 130 },
  { field: "button",
    headerAlign: 'center',
    align: "center",
    headerName: "change queue",
    type: "number",
    width: 130,
    disableClickEventBubbling: true,
    renderCell: (field) => < ReassignmentModal />
  }
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
