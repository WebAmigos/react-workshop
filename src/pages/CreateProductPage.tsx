import { useNavigate } from "react-router-dom";

import { CreateProductForm } from "../features/Products/CreateProductForm";
import { createProduct } from "../services/products";
import { type CreateProductDto } from "../types/Product";
import { routes } from "../routes";

export const CreateProductPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data: CreateProductDto) => {
    // console.log({ data });
    await createProduct(data);
    navigate(routes.PRODUCTS.path);
  };

  return (
    <div>
      <h1 className="dark:text-slate-300">Create product</h1>
      <CreateProductForm onSubmit={handleSubmit} />
    </div>
  );
};
