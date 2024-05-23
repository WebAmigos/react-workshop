import { ProductDto } from "../../types/Product";
import { Button } from "../../ui";
import { useAppDispatch } from "../../hooks/redux";
import { add } from "./basketSlice";

type Props = {
  product: ProductDto;
};

export const ProductsDetails = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <p className="text-white">
        {product.fields.name} ({product.fields.price.toString()} zł){" "}
      </p>
      <Button
        label="+"
        onClick={() => dispatch(add(product))}
        className="ml-2"
      />
    </div>
  );
};
