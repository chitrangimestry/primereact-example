import { Calendar } from "primereact/calendar";
import { useState } from "react";

export default function CalendarComponent() {
     const [date, setDate] = useState(null);
  return (
    <>
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
        
      </div>
    </>
  );
}
