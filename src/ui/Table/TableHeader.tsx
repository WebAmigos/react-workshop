import React, { memo, ComponentProps } from "react";

export const TableHeader = memo(({ children }: ComponentProps<"th">) => {
  return <th className="dark:text-slate-300">{children}</th>;
});

TableHeader.displayName = "memo(TableHeader)";
