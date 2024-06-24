import { useState } from "react";
import "./App.css";

function App() {

 const [name, setName] = useState('')
 const handleChange = (e) => {
   setName(e.target.value)
  // console.log(name); 
 }

  return (
    <>
      <div className="container mx-auto mt-10">
        <input onChange={handleChange} type="text" placeholder="Enter your text" />
        <h1>{name}</h1>
      </div>
    </>
  );
}

export default App;
