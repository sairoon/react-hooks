import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((count) => count + 1);
  }

 

  return (
    <>
      <button onClick={increment}>Click here</button>
      <h1>{count}</h1>
    </>
  );
}

export default App;
