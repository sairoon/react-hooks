import React, { useEffect, useRef } from "react";

const UseRefComp = () => {
  const inputRef = useRef(null);
  const titleRef = useRef(null);
  const videoRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
    titleRef.current.style.color = "skyblue";
  }, [])

  const handlePlay = () => {
    videoRef.current.play();
  }

  const handlePause = () => {
    videoRef.current.pause();
  }
  return (
    <div className="container mx-auto mt-4 border border-white rounded-md">
      <div className="p-4">
        <h1 ref={titleRef} className="text-3xl font-bold mb-4">useRef hook</h1>
        <input ref={inputRef} type="text" className="px-3 py-2 mb-3 rounded-lg me-2" placeholder="Enter your input"/>
        <button className="px-3 py-1 me-2 border border-white rounded-lg" onClick={handlePlay}>play</button>
        <button className="px-3 py-1 me-2 border border-white rounded-lg" onClick={handlePause}>pause</button>
        <video ref={videoRef} src="https://www.w3schools.com/html/mov_bbb.mp4" width="400" height="300" type="video/mp4" controls></video>
      </div>
    </div>
  );
};

export default UseRefComp;
