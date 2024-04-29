import { type KeyboardEventHandler, useReducer, useRef } from "react";
import { Button, Input, Text } from "../../ui";

type State = {
  count: number;
};

enum ActionType {
  INCREMENT = "increment",
  DECREMENT = "decrement",
  SET_VALUE = "set-value",
}

type Action = {
  type: ActionType;
  payload?: number;
};

const initialState: State = { count: 0 };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.DECREMENT:
      return { count: state.count - 1 };
    case ActionType.INCREMENT:
      return { count: state.count + 1 };
    case ActionType.SET_VALUE:
      if (action.payload) {
        return { count: action.payload };
      } else {
        return state;
      }

    default:
      return state;
  }
};

const decrement = () => ({ type: ActionType.DECREMENT });
const increment = () => ({ type: ActionType.INCREMENT });
const setValue = (value: number) => ({
  type: ActionType.SET_VALUE,
  payload: value,
});

export const Stepper = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const valueFieldRef = useRef<HTMLInputElement>(null);

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.code === "Enter" && valueFieldRef.current) {
      dispatch(setValue(parseInt(valueFieldRef.current.value, 10)));
    }
  };

  return (
    <div>
      <div className="flex mx-auto justify-center">
        <Button label="-" onClick={() => dispatch(decrement())} />
        <div className="mx-4">
          <Text>{state.count}</Text>
        </div>
        <Button label="+" onClick={() => dispatch(increment())} />
      </div>
      <div>
        <Input
          ref={valueFieldRef}
          label="Value"
          type="number"
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};
