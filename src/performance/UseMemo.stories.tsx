import { memo, useCallback, useMemo, useState } from "react";

import { Checkbox } from "./Checkbox";
import { logAction } from "../stories/utils";

const meta = {
  title: "Performance/WithHooks",
};
export default meta;

type Props = {
  data: { value: string };
  onClick(): void;
};

const MemoizedComponent = memo(({ data, onClick }: Props) => {
  logAction("render MemoizedComponent");
  return (
    <div>
      <p>
        This is data value: <code>{data.value}</code>
      </p>
      <button onClick={onClick}>Click me</button>
    </div>
  );
});
export const ReactUseMemoWithoutCallback = () => {
  const [isChecked, setIsChecked] = useState(false);
  const toggle = () => setIsChecked((value) => !value);

  logAction(`render parent (ReactUseMemo)`);

  return (
    <div>
      <Checkbox
        id="demo-checkbox"
        label="toggle checkbox"
        defaultChecked={isChecked}
        onChange={toggle}
      />
      <MemoizedComponent
        data={{ value: "test test test" }}
        onClick={() => alert("hey!")}
      />
    </div>
  );
};

export const ReactUseMemoWithCallback = () => {
  const [isChecked, setIsChecked] = useState(false);
  const toggle = () => setIsChecked((value) => !value);

  logAction(`render parent with (ReactUseMemo)`);

  const data = useMemo(
    () => ({ value: `test test test ${new Date().toLocaleTimeString()}` }),
    []
  );

  const onClick = useCallback(() => alert("hey!"), []);

  return (
    <div>
      <Checkbox
        id="demo-checkbox"
        label="toggle checkbox"
        defaultChecked={isChecked}
        onChange={toggle}
      />
      <MemoizedComponent data={data} onClick={onClick} />
    </div>
  );
};
