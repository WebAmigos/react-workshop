import { memo, useState } from "react";

import { logAction } from "../stories/utils";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "Performance/Memo",
};
export default meta;

type Props = {
  children: React.ReactNode;
  checked?: boolean;
};

const MemoizedComponent = memo(
  ({ children, checked }: Props) => {
    logAction("render MemoizedComponent");
    return (
      <div>
        Displaying <code>children</code>: "{children}"
        {checked !== undefined && <> and {checked ? "is" : "is not"} checked</>}
      </div>
    );
  }
  // (prevProps: Props) => {
  //   if (prevProps.checked === true) {
  //     return true;
  //   }
  //   return false;
  // }
);

export const ReactMemoWithPropsAndTextChildren = () => {
  const [isChecked, setIsChecked] = useState(false);
  const toggle = () => setIsChecked((value) => !value);

  logAction(`render parent (ReactMemoWithPropsAndTextChildren)`);

  return (
    <div>
      <Checkbox
        id="demo-checkbox"
        label="toggle checkbox"
        defaultChecked={isChecked}
        onChange={toggle}
      />
      <MemoizedComponent checked={isChecked}>text and props</MemoizedComponent>
    </div>
  );
};

export const ReactMemoChildrenTextOnly = () => {
  const [isChecked, setIsChecked] = useState(false);
  const toggle = () => setIsChecked((value) => !value);

  logAction(`render parent (ReactMemoChildrenTextOnly)`);

  return (
    <div>
      <Checkbox
        id="demo-checkbox"
        label="toggle checkbox"
        defaultChecked={isChecked}
        onChange={toggle}
      />
      <MemoizedComponent>text only</MemoizedComponent>
    </div>
  );
};

export const ReactMemoChildrenWithMarkup = () => {
  const [isChecked, setIsChecked] = useState(false);
  const toggle = () => setIsChecked((value) => !value);

  logAction(`render parent (ReactMemoChildrenWithMarkup)`);

  return (
    <div>
      <Checkbox
        id="demo-checkbox"
        label="toggle checkbox"
        defaultChecked={isChecked}
        onChange={toggle}
      />
      <MemoizedComponent>
        <div>text only</div>
      </MemoizedComponent>
    </div>
  );
};
