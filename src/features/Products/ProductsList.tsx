import { Link } from "react-router-dom";

import { ProductDto } from "../../types/Product";
import { Button } from "../../ui";
import { useAppDispatch } from "../../hooks/redux";
import { add } from "./basketSlice";

type Props = {
  products: ProductDto[];
};

export const ProductsList = ({ products }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="flex my-2">
            <Link to={`/products/${product.id}`} className="text-blue-500">
              {product.fields.name} ({product.fields.price.toString()} zł){" "}
            </Link>
            <Button
              label="+"
              onClick={() => dispatch(add(product))}
              className="ml-2"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
