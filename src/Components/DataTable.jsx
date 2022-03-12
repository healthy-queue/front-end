import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
// import SmallButton from "./Button";
import VisitsModal from "../Visit/VisitModal";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPatients } from '../Patients/reducer';
import io from 'socket.io-client';
// const mockData = require('../MockData/sample-queue.json') // Useful for testing layout

const columns = [
  { field: "id", editable: true, headerAlign: 'center', align: "center", headerName: "ID", width: 70 },
  { field: "first_name", editable: true, headerAlign: 'center', align: "center", headerName: "First name", width: 130 },
  { field: "last_name", editable: true, headerAlign: 'center', align: "center", headerName: "Last name", width: 130 },
  { field: "date_of_birth", editable: true, headerAlign: 'center', align: "center", headerName: "D.O.B.", type: "string", width: 90 },
  { field: "email_address", editable: true, headerAlign: 'center', align: "center", headerName: "Email", type: "string", width: 150 },
  { field: "insurance_carrier", editable: true, headerAlign: 'center', align: "center", headerName: "Carrier", type: "string", width: 90 },
  { field: "insurance_group", editable: true, headerAlign: 'center', align: "center", headerName: "Group", type: "string", width: 90 },
  { field: "phone_number", editable: true, headerAlign: 'center', align: "center", headerName: "Phone", type: "string", width: 15 },
  { field: "createdAt", editable: true, headerAlign: 'center', align: "center", headerName: "Created", type: "number", width: 90 },
  { field: "updatedAt", editable: true, headerAlign: 'center', align: "center", headerName: "Updated", type: "number", width: 90 },
  { field: "isEnqueued", editable: true, headerAlign: 'center', align: "center", headerName: "isEnqueued", type: "string", width: 100 },
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
// this column --> add visit form to populate db visit table and add them to the queue
// only need non nullable fields: patient_id and primary_aliment

export default function DataTable() {
  // Grab patients from redux
  const dispatch = useDispatch()
  const patients = useSelector(state => state.patients.patients)

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        autoHeight
        rows={patients} // Swap in mockData for layout testing
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        sx={{
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
