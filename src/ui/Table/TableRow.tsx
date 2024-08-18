import React, { memo, ComponentProps } from "react";

export const TableRow = memo(({ children }: ComponentProps<"tr">) => {
  return <tr>{children}</tr>;
});

TableRow.displayName = "memo(TableRow)";
