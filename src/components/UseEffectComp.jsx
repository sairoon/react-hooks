import React, { useEffect, useState } from "react";

const UseEffectComp = () => {
  const [count, setCount] = useState(0);
  const [counts, setCounts] = useState(0);

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    // setCount(count + 1);
    console.log("useEffect called");
  }, [count]); //depandency
  return (
    <>
      <div className="container mx-auto mt-4 border border-white rounded-md">
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">useEffect hook</h1>
          <button className="px-3 py-1 border border-white rounded-md" onClick={() => setCount(count + 1)}>Click</button>
          <button className="px-3 py-1 border border-white rounded-md" onClick={() => setCount(counts + 1)}>Click</button>
          {/* <p className="mt-4 ">You clicked {count} times</p> */}
        </div>
      </div>
    </>
  );
};

export default UseEffectComp;
