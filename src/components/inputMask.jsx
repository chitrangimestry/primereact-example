import { useState } from "react";
import { InputMask } from "primereact/inputmask";

export default function InputMaskComponent() {
  const [val, setVal] = useState("");
  return (
    <>
      <InputMask
        value={val}
        onChange={(e) => setVal(e.value)}
        mask="+99-999-999-9999"
        placeholder="Enter phone number"
      />
    </>
  );
}
