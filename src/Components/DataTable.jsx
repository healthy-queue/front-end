// import * as React from "react";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
// import SmallButton from "./Button";
import VisitsModal from "../Visit/VisitModal"
import axios from 'axios';
import io from 'socket.io-client';

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
const rowsInitial = [
  {
    id: 1,
    last_name: "Snow",
    first_name: "Jon",
    date_of_birth: "1-1-01",
    email_address: "js@aol.com",
    phone_number: "27346234",
    insurance_carrier: "BCBS",
    insurance_group: "1234A",
    createdAt: "20:15:45",
    updatedAt: "20:15:45",
    isEnqueued: false
  },
  {
    id: 2,
    last_name: "Lannister",
    first_name: "Cersei",
    date_of_birth: "7-3-99",
    email_address: "cl@aol.com",
    phone_number: "27346234",
    insurance_carrier: "Aetna",
    insurance_group: "1234A",
    createdAt: "20:15:45",
    updatedAt: "20:15:45",
    isEnqueued: false
  },
  {
    id: 3,
    last_name: "Lannister",
    first_name: "Jaime",
    date_of_birth: "1-13-88",
    email_address: "jl@aol.com",
    phone_number: "27346234",
    insurance_carrier: "Kaiser",
    insurance_group: "1234A",
    createdAt: "20:15:45",
    updatedAt: "20:15:45",
    isEnqueued: false
  },
  {
    id: 4,
    last_name: "Stark",
    first_name: "Arya",
    date_of_birth: "1-7-21",
    email_address: "as@aol.com",
    phone_number: "27346234",
    insurance_group: "1234A",
    insurance_carrier: "Aetna",
    createdAt: "20:15:45",
    updatedAt: "20:15:45",
    isEnqueued: false
  },
  {
    id: 5,
    last_name: "Targaryen",
    first_name: "Daenerys",
    date_of_birth: "3-1-67",
    email_address: "dt@aol.com",
    phone_number: "27346234",
    insurance_carrier: "Aetna",
    insurance_group: "1234A",
    createdAt: "20:15:45",
    updatedAt: "20:15:45",
    isEnqueued: false
  },
  {
    id: 6,
    last_name: "Melisandre",
    first_name: null,
    date_of_birth: "1-1-21",
    email_address: "mm@aol.com",
    phone_number: "27346234",
    insurance_carrier: "Aetna",
    insurance_group: "1234A",
    createdAt: "20:15:45",
    updatedAt: "20:15:45",
    isEnqueued: false
  },
  {
    id: 7,
    last_name: "Clifford",
    first_name: "Ferrara",
    date_of_birth: "7-1-13",
    email_address: "js@aol.com",
    phone_number: "27346234",
    insurance_carrier: "Aetna",
    insurance_group: "1234A",
    createdAt: "20:15:45",
    updatedAt: "20:15:45",
    isEnqueued: false
  },
  {
    id: 8,
    last_name: "Frances",
    first_name: "Rossini",
    date_of_birth: "1-1-01",
    email_address: "js@aol.com",
    phone_number: "27346234",
    insurance_carrier: "Aetna",
    insurance_group: "1234A",
    createdAt: "20:15:45",
    updatedAt: "20:15:45",
    isEnqueued: false
  },
  {
    id: 9,
    last_name: "Roxie",
    first_name: "Harvey",
    date_of_birth: "1-7-21",
    email_address: "js@aol.com",
    phone_number: "27346234",
    insurance_carrier: "Aetna",
    insurance_group: "1234A",
    createdAt: "20:15:45",
    updatedAt: "20:15:45",
    isEnqueued: false
  },
];

export default function DataTable() {

  // use setState to set rows, initial value []
  // use useEffect on component load to fetch patients from the backend

  const socket = io.connect('http://localhost:8000')


  const [rows, setRows] = useState(rowsInitial)

  const fetchPatients = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_SERVER}/patients`)
      let patients = response.data;
      setRows(patients)
    } catch (e) {
      console.log(e.message)
    }
  }

  socket.on('refetch patients', () => fetchPatients())

  useEffect(() => {
    fetchPatients()
  }, [])

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
