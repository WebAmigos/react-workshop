import { useForm, type SubmitHandler } from "react-hook-form";

import { Button, Input } from "../../ui";

type RegistrationFormData = {
  email: string;
  password: string;
  language: string;
};

export const RegistrationFormRefsHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>();

  const handleRegistrationForm: SubmitHandler<RegistrationFormData> = (
    data
  ) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleRegistrationForm)}>
      <Input
        label="E-mail"
        {...register("email", { required: true })}
        type="email"
      />
      {errors.email && <p className="text-red-500">E-mail is required</p>}
      <Input
        label="Password"
        {...register("password", { required: true })}
        type="password"
      />
      {errors.password && <p className="text-red-500">Password is required</p>}
      <Input label="Language" {...register("language")} />
      <Button label="Send" type="submit" />
    </form>
  );
};
