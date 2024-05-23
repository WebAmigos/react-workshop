// import { useEffect, useState } from "react";

import { Text } from "../ui";
import { ProductsList } from "../features/Products/ProductsList";
import { type ProductDto } from "../types/Product";
import { type AirtableListResponse, fetchProducts } from "../services/products";
import { useApi } from "../hooks/useApi";

// const products: Product[] = [
//   { id: 1, name: "Laptop", price: 3000 },
//   { id: 2, name: "Keyboard", price: 150 },
//   { id: 3, name: "Mouse", price: 70 },
// ];

export const ProductsPage = () => {
  // const [data, setData] = useState<ProductDto[]>([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  const { data, isLoading, isError } =
    useApi<AirtableListResponse<ProductDto[]>>(fetchProducts);

  // useEffect(() => {
  //   const loadData = async () => {
  //     try {
  //       const responseData = await fetchProducts();
  //       setData(responseData.records);
  //       setIsLoading(false);
  //     } catch {
  //       setIsError(true);
  //     }
  //   };

  //   loadData();

  //   // fetchProducts().then((data) => setProducts(data.records));
  // }, []);

  return (
    <div>
      <Text>Products</Text>
      {isLoading && <p className="text-white">Loading...</p>}
      {isError && <p className="text-white">Oh no! Error!</p>}
      {data && <ProductsList products={data.records} />}
    </div>
  );
};
