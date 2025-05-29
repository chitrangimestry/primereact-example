import { Slider } from "primereact/slider";
import { useState } from "react";

export default function SliderComponent() {
  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(20);
  return (
    <>
      <div className="mt-4 p-4 w-full">
        <p>{value}</p>
        <Slider value={value} onChange={(e) => setValue(e.value)} />
      </div>
      <div>
        <p>{value1}</p>
        <Slider
          value={value1}
          onChange={(e) => setValue1(e.value)}
          range
          step={5}
          min={0}
          max={100}
        />
      </div>
    </>
  );
}
