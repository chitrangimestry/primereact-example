import React, { useState } from "react";
import { Password } from "primereact/password";

export default function PasswordComponent() {
  const [password, setPassword] = useState("");
  return (
    <>
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
    </>
  );
}
