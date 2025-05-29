import "./App.css";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import DataTableComponent from "./components/dataTable";
import PasswordComponent from "./components/passwordComponent";
import CalendarComponent from "./components/calendarComponent";
import InputMaskComponent from "./components/inputMask";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-2xl font-bold mb-4">PrimeReact Example</h1>
        <DataTableComponent />
        <PasswordComponent />
        <CalendarComponent />
        <InputMaskComponent />
        <div className="mt-4 p-4"></div>
      </div>
    </>
  );
}

export default App;
