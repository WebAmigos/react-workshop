import React, { memo, ComponentProps } from "react";

export const TableCell = memo(({ children }: ComponentProps<"td">) => {
  return <td className="dark:text-slate-300">{children}</td>;
});

TableCell.displayName = "memo(TableCell)";
