import { memo } from "react";

type Props = {
  // label: string;
  children: string | string[] | number;
};

export const Text = memo(({ children }: Props) => {
  return <p className="dark:text-slate-300">{children}</p>;
});

Text.displayName = "memo(Text)";
