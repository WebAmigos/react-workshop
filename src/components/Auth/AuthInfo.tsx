import { AuthCredentials } from "./AuthCredentials";

import { Text } from "../../ui";

export const AuthInfo = () => {
  return (
    <div>
      <Text>Auth Info</Text>
      <AuthCredentials />
    </div>
  );
};
