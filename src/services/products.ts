import { ProductDto } from "../types/Product";

export type AirtableListResponse<T> = {
  records: T;
};

const API_BASE_URL = "https://api.airtable.com/v0/appTY6UZYkPtIRSWc";
const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
};

export const fetchProducts = (): Promise<
  AirtableListResponse<ProductDto[]>
> => {
  // return api.get('/products')
  return fetch(`${API_BASE_URL}/products`, {
    headers,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Invalid response");
  });
};

export const fetchProduct = (
  id: ProductDto["id"] | undefined
): Promise<ProductDto> => {
  if (!id) {
    throw new Error("Invalid id");
  }
  return fetch(`${API_BASE_URL}/products/${id}`, {
    headers,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Invalid response");
  });
};
