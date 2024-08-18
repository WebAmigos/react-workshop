import React, { memo, ComponentProps } from "react";

export const TableFoot = memo(({ children }: ComponentProps<"tfoot">) => {
  return <tfoot className="dark:text-slate-300">{children}</tfoot>;
});

TableFoot.displayName = "memo(TableFoot)";
