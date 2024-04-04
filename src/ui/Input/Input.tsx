import { type ComponentPropsWithRef, useId, forwardRef, type Ref } from "react";

type Props = {
  label: string;
} & ComponentPropsWithRef<"input">;

export const Input = forwardRef(
  ({ label, ...rest }: Props, ref: Ref<HTMLInputElement>) => {
    const id = useId();
    return (
      <div className="my-2">
        <label htmlFor={id} className="mr-2">
          {label}
        </label>
        <input id={id} ref={ref} {...rest} />
      </div>
    );
  }
);
