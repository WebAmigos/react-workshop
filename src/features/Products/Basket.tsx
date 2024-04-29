import { useAppSelector } from "../../hooks/redux";
import { selectCount } from "./basketSlice";

export const Basket = () => {
  // const count = useAppSelector(selectCount);
  const count = useAppSelector((state) => state.basket.products.length);

  return <span className="dark:text-slate-300">{count}</span>;
};
