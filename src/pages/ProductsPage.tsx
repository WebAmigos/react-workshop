import { Text } from "../ui";
import { ProductsList } from "../features/Products/ProductsList";
import { type Product } from "../types/Product";

const products: Product[] = [
  { id: 1, name: "Laptop", price: 3000 },
  { id: 2, name: "Keyboard", price: 150 },
  { id: 3, name: "Mouse", price: 70 },
];

export const ProductsPage = () => {
  return (
    <div>
      <Text>Products</Text>
      <ProductsList products={products} />
    </div>
  );
};
