import { DataGrid } from "@mui/x-data-grid";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActivePatient } from '../Patients/reducer';
import VisitsModal from "../Visit/VisitModal";
// const mockData = require('../MockData/sample-queue.json') // Useful for testing layout

const columns = [
  { field: "id", editable: false, headerAlign: 'center', align: "center", headerName: "ID", width: 70 },
  { field: "first_name", editable: false, headerAlign: 'center', align: "center", headerName: "First name", width: 130 },
  { field: "last_name", editable: false, headerAlign: 'center', align: "center", headerName: "Last name", width: 130 },
  { field: "date_of_birth", editable: false, headerAlign: 'center', align: "center", headerName: "D.O.B.", type: "string", width: 90 },
  { field: "email_address", editable: false, headerAlign: 'center', align: "center", headerName: "Email", type: "string", width: 150 },
  { field: "insurance_carrier", editable: false, headerAlign: 'center', align: "center", headerName: "Carrier", type: "string", width: 90 },
  { field: "insurance_group", editable: false, headerAlign: 'center', align: "center", headerName: "Group", type: "string", width: 90 },
  { field: "phone_number", editable: false, headerAlign: 'center', align: "center", headerName: "Phone", type: "string", width: 15 },
  { field: "createdAt", editable: false, headerAlign: 'center', align: "center", headerName: "Created", type: "number", width: 90 },
  { field: "updatedAt", editable: false, headerAlign: 'center', align: "center", headerName: "Updated", type: "number", width: 90 },
  { field: "isEnqueued", editable: false, headerAlign: 'center', align: "center", headerName: "Enqueued", type: "string", width: 100 },
  {
    field: "button",
    headerAlign: 'center',
    align: "center",
    headerName: "Queue",
    type: "number",
    width: 90,
    disableClickEventBubbling: true,
    renderCell: (field) => <VisitsModal />
  },
];
// TODO: this column --> add visit form to populate db visit table and add them to the queue
// only need non nullable fields: patient_id and primary_aliment

export default function DataTable() {
  // Grab patients from redux
  const dispatch = useDispatch()
  const patients = useSelector(state => state.patients.patients)

  // Lets make this non editable or make it so edits update our database - stretch
  return (
    <div style={{ minHeight: 400, width: "100%" }}>
      <DataGrid
        onRowClick={(event) => {dispatch(setActivePatient(event.row.id))}}
        rows={patients} // Swap in mockData for layout testing
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        sx={{
          minHeight: '65vh',
          borderRadius: 3,
          boxShadow: 2,
          border: 2,
          borderColor: "primary.light",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
      />
    </div>
  );
}
