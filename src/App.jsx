import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <div className="container mx-auto mt-10">
        <input
          className="px-3 py-2"
          name="name"
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your name"
        />
        <input
          className="ms-2 px-3 py-2"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
        />
        <h1>My name is: {name}</h1>
        <h1>My email address is: {email}</h1>
      </div>
    </>
  );
}

export default App;
