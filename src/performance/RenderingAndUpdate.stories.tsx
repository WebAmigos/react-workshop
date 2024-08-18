import { useRef, useState } from "react";

import { Text, Button } from "../ui";
import { logAction } from "../stories/utils";

const meta = {
  title: "Performance/StateAndRefUpdate",
};
export default meta;

export const StateAndRefUpdate = () => {
  const [countA, setCountA] = useState(0);
  const countB = useRef(0);

  return (
    <>
      <Text>
        values: A={countA.toString()}, B={countB.current.toString()}
      </Text>
      <div className="flex">
        <Button
          onClick={() => {
            setCountA((a) => a + 1);
            logAction("a");
          }}
          label="increment A"
        />
        <Button
          onClick={() => {
            countB.current += 1;
            logAction("b");
          }}
          label="increment B"
          className="ml-6"
        />
      </div>
    </>
  );
};
