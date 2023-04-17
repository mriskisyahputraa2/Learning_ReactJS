import { useEffect, useState } from "react";

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interValId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interValId);
  }, []);

  function formatTime(date) {
    const hours = date.getHours().toString().padStart(2, 0);
    const minutes = date.getMinutes().toString().padStart(2, 0);
    const seconds = date.getSeconds().toString().padStart(2, 0);

    return `${hours}:${minutes}:${seconds}`;
  }
  return (
    <>
      <div className="text-2xl">
        <p className="text-red-500">
          <b className="text-black">JAM: </b>
          {formatTime(currentTime)}
        </p>
      </div>
    </>
  );
}
export default Clock;
