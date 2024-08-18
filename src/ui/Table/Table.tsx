import React, { memo, ComponentProps } from "react";

export const Table = memo(({ children }: ComponentProps<"table">) => {
  return <table>{children}</table>;
});

Table.displayName = "memo(Table)";
