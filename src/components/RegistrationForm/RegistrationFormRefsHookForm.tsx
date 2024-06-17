import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Input } from "../../ui";
import { type RegistrationFormData, validationSchema } from "./types";

export const RegistrationFormRefsHookForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(validationSchema),
  });

  const watchedFields = watch(["email", "password"]);
  const [email, password] = watchedFields;

  const handleRegistrationForm: SubmitHandler<RegistrationFormData> = (
    data
  ) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleRegistrationForm)}>
      <p className="dark:text-white">
        E-mail: {email}, password: {password}
      </p>
      <Input
        label="E-mail"
        {...register("email")}
        // type="email"
        error={errors.email}
      />
      <Input
        label="Password"
        {...register("password")}
        type="password"
        error={errors.password}
      />
      <Input
        label="Language"
        {...register("language")}
        error={errors.language}
      />
      <Button label="Send" type="submit" />
    </form>
  );
};
