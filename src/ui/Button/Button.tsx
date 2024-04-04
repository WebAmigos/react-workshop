import { MouseEventHandler } from "react";

type Props = {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ label, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-1 text-sm text-white bg-blue-600 rounded-sm border border-blue-200"
    >
      {label}
    </button>
  );
};
