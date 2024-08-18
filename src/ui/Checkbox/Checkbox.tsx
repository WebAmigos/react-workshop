import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Props = {
  value: string | number;
  label: string;
  onChange: (value: string | number) => void;
  defaultChecked?: boolean;
};

export const Checkbox = ({
  value,
  label,
  onChange,
  defaultChecked = false,
}: Props) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = () => {
    setChecked((value) => !value);
    onChange(value);
  };

  const id = uuidv4();
  return (
    <div>
      <input
        id={id}
        type="checkbox"
        defaultChecked={checked}
        defaultValue={value}
        onChange={handleChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
