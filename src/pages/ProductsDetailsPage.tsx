import { useEffect, useState } from "react";

import { Text } from "../ui";
import { type ProductDto } from "../types/Product";
import { useParams } from "react-router-dom";
import { ProductsDetails } from "../features/Products/ProductDetails";
import { fetchProduct } from "../services/products";

export const ProductsDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductDto | null>(null);

  useEffect(() => {
    if (id) {
      fetchProduct(id).then((data) => setProduct(data));
    }
  }, [id]);

  return (
    <div>
      <Text>Product</Text>
      {product && <ProductsDetails product={product} />}
    </div>
  );
};
