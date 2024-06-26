import React, { useState } from "react";

const UseStareComp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <div className="container mx-auto mt-10 border border-white rounded-md">
        <div className="p-4">
          <h1 className="text-3xl font-bold">useState</h1>
          <input
            className="px-3 py-2 mt-4"
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
      </div>
    </>
  );
};

export default UseStareComp;
