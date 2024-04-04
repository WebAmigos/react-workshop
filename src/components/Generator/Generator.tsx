import { type MouseEventHandler, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, Text } from "../../ui";

export const Generator = () => {
  const [id, setId] = useState(uuidv4());

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    // id = uuidv4();
    setId(uuidv4());
  };

  const handleDivClick: MouseEventHandler<HTMLDivElement> = () => {
    // id = uuidv4();
    // setId(uuidv4());
    console.log("div click!");
  };

  return (
    <div onClick={handleDivClick}>
      <Text>{id}</Text>
      <Button label="Refresh" onClick={handleClick} />
    </div>
  );
};
