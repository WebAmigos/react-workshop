import { useEffect, useState } from "react";

import { Text } from "../ui";
import { ProductsList } from "../features/Products/ProductsList";
import { type ProductDto } from "../types/Product";

// const products: Product[] = [
//   { id: 1, name: "Laptop", price: 3000 },
//   { id: 2, name: "Keyboard", price: 150 },
//   { id: 3, name: "Mouse", price: 70 },
// ];

export const ProductsPage = () => {
  const [products, setProducts] = useState<ProductDto[]>([]);

  useEffect(() => {
    // curl "https://api.airtable.com/v0/appTY6UZYkPtIRSWc/products?maxRecords=3&view=default" \
    // -H "Authorization: Bearer YOUR_SECRET_API_TOKEN"

    fetch("https://api.airtable.com/v0/appTY6UZYkPtIRSWc/products", {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Invalid response");
      })
      .then((data) => setProducts(data.records));
  }, []);

  return (
    <div>
      <Text>Products</Text>
      <ProductsList products={products} />
    </div>
  );
};
