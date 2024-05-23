import { useEffect, useState } from "react";

import { Text } from "../ui";
import { ProductsList } from "../features/Products/ProductsList";
import { type ProductDto } from "../types/Product";
import { fetchProducts } from "../services/products";

// const products: Product[] = [
//   { id: 1, name: "Laptop", price: 3000 },
//   { id: 2, name: "Keyboard", price: 150 },
//   { id: 3, name: "Mouse", price: 70 },
// ];

export const ProductsPage = () => {
  const [products, setProducts] = useState<ProductDto[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchProducts();
      setProducts(data.records);
    };

    loadData();

    // fetchProducts().then((data) => setProducts(data.records));
  }, []);

  return (
    <div>
      <Text>Products</Text>
      <ProductsList products={products} />
    </div>
  );
};
