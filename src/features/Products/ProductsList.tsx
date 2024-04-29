import { Product } from "../../types/Product";
import { Button, Text } from "../../ui";
import { useAppDispatch } from "../../hooks/redux";
import { add } from "./basketSlice";

const products: Product[] = [
  { id: 1, name: "Laptop", price: 3000 },
  { id: 2, name: "Keyboard", price: 150 },
  { id: 3, name: "Mouse", price: 70 },
];

export const ProductsList = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <Text>Products</Text>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="flex my-2">
            <Text>
              {product.name} ({product.price.toString()} zł){" "}
            </Text>
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
