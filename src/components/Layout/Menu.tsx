import { NavLink } from "react-router-dom";

import { routes } from "../../routes";
import { Basket } from "../../features/Products/Basket";

type Props = {
  to: string;
  children: string;
};

const WaNavLink = ({ to, children }: Props) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isActive
          ? "text-red-700"
          : isPending
            ? "text-yellow-600"
            : " dark:text-slate-300"
      }
    >
      {children}
    </NavLink>
  );
};

export const Menu = () => {
  return (
    <div>
      <nav className="mb-4">
        <ul className="flex">
          <li className="mr-2">
            <WaNavLink to={routes.HOME.path}>Home</WaNavLink>
          </li>
          <li className="mr-2">
            <WaNavLink to={routes.COUNTER.path}>Counter</WaNavLink>
          </li>
          <li className="mr-2">
            <WaNavLink to={routes.GENERATOR.path}>Generator</WaNavLink>
          </li>
          <li className="mr-2">
            <WaNavLink to={routes.REGISTRATION.path}>Registration</WaNavLink>
          </li>
          <li className="mr-2">
            <WaNavLink to={routes.STEPPER.path}>Stepper</WaNavLink>
          </li>
          <li className="mr-2">
            <WaNavLink to={routes.PRODUCTS.path}>Products</WaNavLink>
          </li>
          <li className="mr-2">
            <WaNavLink to={routes.DATATABLE.path}>Data table</WaNavLink>
          </li>
          <li className="mr-2">
            <Basket />
          </li>
        </ul>
      </nav>
    </div>
  );
};
