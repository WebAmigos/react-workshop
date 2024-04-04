import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, Text } from "../../ui";

export const Generator = () => {
  const [id, setId] = useState(uuidv4());

  const handleClick = () => {
    // id = uuidv4();
    setId(uuidv4());
  };

  return (
    <div>
      <Text>{id}</Text>
      <Button label="Refresh" onClick={handleClick} />
    </div>
  );
};
