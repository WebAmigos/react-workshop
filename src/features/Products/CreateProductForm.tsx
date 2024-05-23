import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Input } from "../../ui";
import {
  type CreateProductDto,
  createProductSchema,
} from "../../types/Product";

type Props = {
  onSubmit: (data: CreateProductDto) => void;
};

export const CreateProductForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProductDto>({
    resolver: zodResolver(createProductSchema),
  });

  const handleRegistrationForm: SubmitHandler<CreateProductDto> = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleRegistrationForm)}>
      <Input label="Name" {...register("name")} error={errors.name} />
      <Input
        label="Description"
        {...register("description")}
        error={errors.description}
      />
      <Input
        label="Price"
        {...register("price", { valueAsNumber: true })}
        type="number"
        error={errors.price}
      />
      <Button label="Send" type="submit" />
    </form>
  );
};
