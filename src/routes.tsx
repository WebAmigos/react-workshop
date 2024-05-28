import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage";
import { CounterPage } from "./pages/CounterPage";
import { GeneratorPage } from "./pages/GeneratorPage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { StepperPage } from "./pages/StepperPage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductsDetailsPage } from "./pages/ProductsDetailsPage";

export const routes = {
  HOME: {
    path: "/",
    // title:
  },
  COUNTER: {
    path: "/counter",
  },
  GENERATOR: {
    path: "/generator",
  },
  REGISTRATION: {
    path: "/registration",
  },
  STEPPER: {
    path: "/stepper",
  },
  PRODUCTS: {
    path: "/products",
  },
  PRODUCT_DETAILS: {
    path: "/products/:id",
  },
};

export const router = createBrowserRouter([
  {
    path: routes.HOME.path,
    element: <Layout />,
    children: [
      {
        path: routes.HOME.path,
        element: <HomePage />,
      },
      {
        path: routes.COUNTER.path,
        element: <CounterPage />,
      },
      {
        path: routes.GENERATOR.path,
        element: <GeneratorPage />,
      },
      {
        path: routes.REGISTRATION.path,
        element: <RegistrationPage />,
      },
      {
        path: routes.STEPPER.path,
        element: <StepperPage />,
      },
      {
        path: routes.PRODUCTS.path,
        element: <ProductsPage />,
      },
      {
        path: routes.PRODUCT_DETAILS.path,
        element: <ProductsDetailsPage />,
      },
    ],
  },
]);
