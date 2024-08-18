import React, { memo, ComponentProps } from "react";

export const TableBody = memo(({ children }: ComponentProps<"tbody">) => {
  return <tbody>{children}</tbody>;
});

TableBody.displayName = "memo(TableBody)";
