import Grid from '@material-ui/core/Grid';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import AssignmentModal from './AssignmentModal.jsx';
import NextPatient from './NextPatient';
import { setActiveQueueItem } from './reducer';
import { useDispatch } from 'react-redux';

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
    renderCell: (field) => < AssignmentModal reassignment={true}/>
  }
];

const Queue = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div style={{ width: '100%' }}>
      <DataGrid
        onRowClick={(event) => { dispatch(setActiveQueueItem(event.row))}}
        autoWidth
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        sx={{
          minHeight: '65vh',
          borderRadius: 3,
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
        }}
      />
      <br/>
        { data.length
           ?<Grid container item direction="row" >
              <Grid
                item
                container
                direction="column"
                alignItems="flex-end"
                justifyContent="flex-end"
                > <NextPatient />
              </Grid>
            </Grid>
            :null
         }
    </div>
  );
}

export default Queue;

