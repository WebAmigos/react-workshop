import "./App.css";

import { Button, Text } from "./ui";

function App() {
  return (
    <>
      <Text>Hello Amigos!</Text>
      <Button label="Click me!" onClick={() => alert("Hey!")} />
    </>
  );
}

export default App;
