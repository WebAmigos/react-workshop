import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage";
import { CounterPage } from "./pages/CounterPage";
import { GeneratorPage } from "./pages/GeneratorPage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { StepperPage } from "./pages/StepperPage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductsDetailsPage } from "./pages/ProductsDetailsPage";
import { CreateProductPage } from "./pages/CreateProductPage copy";
import { DatatablePage } from "./pages/DataTable";

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
  CREATE_PRODUCT: {
    path: "/products/create",
  },
  DATATABLE: {
    path: "/datatable",
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
      {
        path: routes.CREATE_PRODUCT.path,
        element: <CreateProductPage />,
      },
      {
        path: routes.DATATABLE.path,
        element: <DatatablePage />,
      },
    ],
  },
]);
