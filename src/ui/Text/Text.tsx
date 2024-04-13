type Props = {
  // label: string;
  children: string | string[] | number;
};

export const Text = ({ children }: Props) => {
  return <p className="dark:text-slate-300">{children}</p>;
};
