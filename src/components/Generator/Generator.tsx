import { v4 as uuidv4 } from "uuid";
import { Button, Text } from "../../ui";

export const Generator = () => {
  const handleClick = () => {
    console.log("click");
    window.location.reload();
  };

  return (
    <div>
      <Text>{uuidv4()}</Text>
      <Button label="Refresh" onClick={handleClick} />
    </div>
  );
};
