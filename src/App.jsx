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
import DialogComponent from "./components/dialogComponent";
import PaginatorComponent from "./components/paginatorComponent";
import SliderComponent from "./components/sliderComponent";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-2xl font-bold mb-4">PrimeReact Example</h1>
        <DataTableComponent />
        <PasswordComponent />
        <InputMaskComponent />
        <PaginatorComponent />
        <SliderComponent />
        <div className="mt-4 p-4 flex flex-row gap-4 justify-center items-center">
          <CalendarComponent />
          <DialogComponent />
        </div>
      </div>
    </>
  );
}

export default App;
