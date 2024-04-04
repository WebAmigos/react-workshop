import { type ChangeEventHandler, useState } from "react";
import { Button } from "../../ui";

type RegistrationFormData = {
  email: string;
  password: string;
  language: string;
};

export const RegistrationFormState = () => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    email: "",
    password: "",
    language: "",
  });
  const { email, password, language } = formData;

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [language, setLanguage] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    setFormData({
      ...formData,
      [id]: value,
    });
    // if (id === "email") {
    //   setEmail(value);
    // } else if (id === "password") {
    //   setPassword(value);
    // } else if (id === "language") {
    //   setLanguage(value);
    // }
  };

  return (
    <form>
      <p>
        Email: {email}, password: {password}
      </p>
      <div className="my-2">
        <label htmlFor="email" className="mr-2">
          E-mail
        </label>
        <input id="email" type="email" onChange={handleChange} />
      </div>
      <div className="my-2">
        <label htmlFor="password" className="mr-2">
          Password
        </label>
        <input id="password" type="password" onChange={handleChange} />
      </div>
      <div className="my-2">
        <label htmlFor="language" className="mr-2">
          Language
        </label>
        <input id="language" onChange={handleChange} />
      </div>
      <Button label="Send" type="submit" />
    </form>
  );
};
