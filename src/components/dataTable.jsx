import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { FilterMatchMode } from "primereact/api";

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
export default function DataTableComponent() {
  const [filters, setFilters] = useState({
    global: {
      value: null,
      matchMode: FilterMatchMode.CONTAINS,
    },
  });
  return (
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
  );
}
