export type Product = {
  id: number;
  name: string;
  price: number;
};

export type ProductDto = {
  id: string;
  fields: {
    name: string;
    description: string;
    price: number;
    create_at: Date;
    updated_at: Date;
  };
};
