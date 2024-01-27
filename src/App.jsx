import { useState, useEffect } from "react";

export default function App() {
  const [isOnOff, setIsOnOff] = useState(false);
  const [elapsedTime, SetElapsedTIme] = useState(0);

  const divStyle = {
    textAlign: "center",
  }
  const handleClick = () => {
    setIsOnOff((prevValue) => !prevValue);
  };

  const formatTime = (sec) => {
    const mins = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${mins}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const reset = () => {
    setIsOnOff(false);
    SetElapsedTIme(0);
  };

  useEffect(() => {
    let intervalId;

    if (isOnOff) {
      intervalId = setInterval(() => {
        SetElapsedTIme((prevTIme) => prevTIme + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isOnOff]);

  return (
    <div style={divStyle}>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(elapsedTime)}</p>
      <button onClick={handleClick}>{isOnOff ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
