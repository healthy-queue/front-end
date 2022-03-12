import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
// import SmallButton from "./Button";
import VisitsModal from "../Visit/VisitModal"

const columns = [
  { field: "id", editable: true, headerAlign: 'center', align: "center", headerName: "ID", width: 70 },
  { field: "firstName", editable: true, headerAlign: 'center', align: "center", headerName: "First name", width: 130 },
  { field: "lastName", editable: true, headerAlign: 'center', align: "center", headerName: "Last name", width: 130 },
  { field: "dob", editable: true, headerAlign: 'center', align: "center", headerName: "D.O.B.", type: "string", width: 90 },
  { field: "email", editable: true, headerAlign: 'center', align: "center", headerName: "Email", type: "string", width: 150 },
  { field: "carrier", editable: true,headerAlign: 'center', align: "center", headerName: "Carrier", type: "string", width: 90 },
  { field: "group", editable: true,headerAlign: 'center', align: "center", headerName: "Group", type: "string", width: 90 },
  { field: "created", editable: true, headerAlign: 'center', align: "center", headerName: "Created", type: "number", width: 90 },
  { field: "updated", editable: true, headerAlign: 'center', align: "center", headerName: "Updated", type: "number", width: 90 },
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
const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    dob: "1-1-01",
    email: "js@aol.com",
    carrier: "BCBS",
    group: "1234A",
    created: "20:15:45",
    updated: "20:15:45",
    isEnqueued: false
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    dob: "7-3-99",
    email: "cl@aol.com",
    carrier: "Aetna",
    group: "1234A",
    created: "20:15:45",
    updated: "20:15:45",
    isEnqueued: false
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    dob: "1-13-88",
    email: "jl@aol.com",
    carrier: "Kaiser",
    group: "1234A",
    created: "20:15:45",
    updated: "20:15:45",
    isEnqueued: false
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    dob: "1-7-21",
    email: "as@aol.com",
    group: "1234A",
    carrier: "Aetna",
    created: "20:15:45",
    updated: "20:15:45",
    isEnqueued: false
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    dob: "3-1-67",
    email: "dt@aol.com",
    carrier: "Aetna",
    group: "1234A",
    created: "20:15:45",
    updated: "20:15:45",
    isEnqueued: false
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: null,
    dob: "1-1-21",
    email: "mm@aol.com",
    carrier: "Aetna",
    group: "1234A",
    created: "20:15:45",
    updated: "20:15:45",
    isEnqueued: false
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    dob: "7-1-13",
    email: "js@aol.com",
    carrier: "Aetna",
    group: "1234A",
    created: "20:15:45",
    updated: "20:15:45",
    isEnqueued: false
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    dob: "1-1-01",
    email: "js@aol.com",
    carrier: "Aetna",
    group: "1234A",
    created: "20:15:45",
    updated: "20:15:45",
    isEnqueued: false
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    dob: "1-7-21",
    email: "js@aol.com",
    carrier: "Aetna",
    group: "1234A",
    created: "20:15:45",
    updated: "20:15:45",
    isEnqueued: false
  },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
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
          borderColor: "primary.light",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
      />
    </div>
  );
}
