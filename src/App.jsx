import "./App.css";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { useState } from "react";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Calendar } from "primereact/calendar";

import { InputMask } from "primereact/inputmask";

function App() {
  const [filters, setFilters] = useState({
    global: {
      value: null,
      matchMode: FilterMatchMode.CONTAINS,
    },
  });
  const [password, setPassword] = useState("");
  const [date, setDate] = useState(null);
  const [val, setVal] = useState("");

  const data = [
    {
      id: 1,
      name: "John Doe",
      age: 28,
      country: "USA",
      company: "Google",
      designation: "Software Engineer",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 32,
      country: "Canada",
      company: "Microsoft",
      designation: "Project Manager",
    },
    {
      id: 3,
      name: "Alice Johnson",
      age: 24,
      country: "UK",
      company: "Apple",
      designation: "Product Manager",
    },
    {
      id: 4,
      name: "Bob Brown",
      age: 45,
      country: "Australia",
      company: "Google",
      designation: "Developer Advocate",
    },
    {
      id: 5,
      name: "Charlie White",
      age: 30,
      country: "New Zealand",
      company: "Microsoft",
      designation: "Data Analyst",
    },
    {
      id: 6,
      name: "Diana Green",
      age: 29,
      country: "Germany",
      company: "Apple",
      designation: "UX Designer",
    },
    {
      id: 7,
      name: "Ethan Blue",
      age: 35,
      country: "France",
      company: "Amazon",
      designation: "Developer Advocate",
    },
    {
      id: 8,
      name: "Fiona Black",
      age: 27,
      country: "Italy",
      company: "Apple",
      designation: "Product Manager",
    },
    {
      id: 9,
      name: "George Yellow",
      age: 31,
      country: "Spain",
      company: "Google",
      designation: "Software Engineer",
    },
    {
      id: 10,
      name: "Hannah Purple",
      age: 22,
      country: "Netherlands",
      company: "Amazon",
      designation: "Marketing Manager",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-2xl font-bold mb-4">PrimeReact Example</h1>
        <div className="App ">
          <InputText
            onInput={(e) =>
              setFilters({
                global: {
                  value: e.target.value,
                  matchMode: FilterMatchMode.CONTAINS,
                },
              })
            }
            placeholder="Global Search"
            className="w-full md:w-20rem mb-2"
          />
          <DataTable
            value={data}
            sortMode="multiple"
            filters={filters}
            paginator
            rows={2}
            rowsPerPageOptions={[1, 2, 4, 10]}
            totalRecords={data.length}
          >
            <Column field="id" header="ID" />
            <Column field="name" header="Name" />
            <Column field="age" header="Age" />
            <Column field="country" header="Country" />
            <Column field="company" header="Company" />
            <Column field="designation" header="Designation" />
          </DataTable>
        </div>
        <div className="mt-4 p-4">
          <Password
            value={password}
            placeholder="Enter your password"
            feedback={true}
            weakLabel="Weak"
            mediumLabel="Medium"
            strongLabel="Strong"
            strongRegex={
              /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/
            }
            toggleMask={true}
            onChange={(e) => setPassword(e.target.value)}
            minLength={8}
            maxLength={8}
          />
        </div>
        <div className="mt-4 p-4">
          <Calendar
            placeholder="Choose a date"
            dateFormat="dd/mm/yy"
            value={date}
            onChange={(e) => setDate(e.value)}
            minDate={new Date()}
            maxDate={new Date(2025, 11, 31)}
            showIcon={true}
            className="w-full md:w-20rem"
          />
          <InputMask
            value={val}
            onChange={(e) => setVal(e.value)}
            mask="+99-999-999-9999"
            placeholder="Enter phone number"
          />
        </div>
      </div>
    </>
  );
}

export default App;
