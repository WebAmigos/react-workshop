import { useEffect, useState } from "react";

import { Text } from "../ui";
import { type ProductDto } from "../types/Product";
import { useParams } from "react-router-dom";
import { ProductsDetails } from "../features/Products/ProductDetails";
import { fetchProduct } from "../services/products";

export const ProductsDetailsPage = () => {
  const { id } = useParams();
  const [data, setData] = useState<ProductDto | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (id) {
      fetchProduct(id)
        .then((responseData) => {
          setData(responseData);
          setIsLoading(false);
        })
        .catch(() => {
          setIsError(true);
        });
    }
  }, [id]);

  return (
    <div>
      <Text>Product</Text>
      {isLoading && <p className="text-white">Loading...</p>}
      {isError && <p className="text-white">Oh no! Error!</p>}
      {data && <ProductsDetails product={data} />}
    </div>
  );
};
