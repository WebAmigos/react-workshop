import React, { memo, ComponentProps } from "react";

export const TableHead = memo(({ children }: ComponentProps<"thead">) => {
  return <thead>{children}</thead>;
});

TableHead.displayName = "memo(TableHead)";
