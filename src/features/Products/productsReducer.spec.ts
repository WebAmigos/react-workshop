import { ProductDto } from "../../types/Product";
import reducer, { BasketState, add, remove } from "./basketSlice";
import { store } from "../../store";

describe("products reducer", () => {
  it("should return change values", () => {
    const initialState: BasketState = {
      products: [],
    };

    const mockProduct: ProductDto = {
      id: "qwerty",
      fields: {
        name: "polonez",
        description: "lorem ipsum",
        price: 123,
        create_at: new Date(),
        updated_at: new Date(),
      },
    };

    expect(store.getState().basket.products.length).toBe(0);

    store.dispatch(add(mockProduct));
    store.dispatch(add(mockProduct));
    expect(store.getState().basket.products.length).toBe(2);

    store.dispatch(remove("abc"));
    expect(store.getState().basket.products.length).toBe(2);

    store.dispatch(remove("qwerty"));
    console.log(store.getState());
    expect(store.getState().basket.products.length).toBe(0);
  });
});
