import { Paginator } from "primereact/paginator";
import { useState } from "react";
const data = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
  { id: 4, name: "Item 4" },
  { id: 5, name: "Item 5" },
  { id: 6, name: "Item 6" },
  { id: 7, name: "Item 7" },
  { id: 8, name: "Item 8" },
  { id: 9, name: "Item 9" },
  { id: 10, name: "Item 10" },
  { id: 11, name: "Item 11" },
  { id: 12, name: "Item 12" },
  { id: 13, name: "Item 13" },
  { id: 14, name: "Item 14" },
  { id: 15, name: "Item 15" },
  { id: 16, name: "Item 16" },
  { id: 17, name: "Item 17" },
  { id: 18, name: "Item 18" },
  { id: 19, name: "Item 19" },
  { id: 20, name: "Item 20" },
];
export default function PaginatorComponent() {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(3);
  return (
    <>
      <div className="mt-4 p-4">
        <ul>
            {data.slice(first, first + rows).map((item) => (
                <li key={item.id} className="mb-2">
                {item.name}
                </li>
            ))}
        </ul>
        <Paginator
          first={first}
          rows={rows}
          totalRecords={data.length}
          rowsPerPageOptions={[2, 5, 10]}
          onPageChange={(e) => {
            setFirst(e.first);
            setRows(e.rows);
          }}
        />
      </div>
    </>
  );
}
