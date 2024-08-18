import { useState, useId } from "react";

import { Button, Input } from "../ui";

export default {
  title: "Performance/IndexKeys",
};

export const ReactKeysIndex = () => {
  const [items, setItems] = useState([
    { id: useId(), name: "A", value: "pierwszy" },
    { id: useId(), name: "B", value: "drugi" },
  ]);
  const newId = useId();

  const addItem = () => {
    setItems([{ id: newId, name: "C", value: "trzeci" }, ...items]);
  };

  return (
    <div>
      <h2>Index Keys</h2>
      {items.map((elem, index) => (
        <div key={index}>
          <div>
            <Input
              type="text"
              label={`index ${index}`}
              defaultValue={elem.value}
              style={{ border: "#c0c0c0 1px solid " }}
            />
          </div>
        </div>
      ))}
      <div className="my-6"></div>
      <h2>Id Keys</h2>
      {items.map((elem) => (
        <div key={elem.id}>
          <div>
            <Input
              type="text"
              label={`id ${elem.id}`}
              defaultValue={elem.value}
              style={{ border: "#c0c0c0 1px solid " }}
            />
          </div>
        </div>
      ))}
      <div>
        <Button label="add" onClick={addItem} />
      </div>
    </div>
  );
};
