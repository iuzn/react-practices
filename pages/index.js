import { useEffect, useState } from "react";
import useLongPress from "/hooks/useLongPress";

function HomePage() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const savedCount = localStorage.getItem("count" || 0);
    if (savedCount == null || savedCount === "null") {
      setCount(0);
    } else {
      setCount(parseInt(savedCount));
    }
  }, []);

  const onLongPress = () => {
    setCount(count + 1);
    localStorage.setItem("count", count + 1);
  };

  const onClick = () => {
    setCount(count + 1);
    localStorage.setItem("count", count + 1);  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };
  const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);

  return (
    <div className="flex justify-center items-center h-screen mx-auto background">
      <button
        className="flex flex-col items-center px-4 sm:px-8 py-5 text-4xl font-light text-white bg-black mt-[-64px] bg-opacity-20 backdrop-filter backdrop-blur firefox:bg-opacity-80 rounded-2xl transform scale-100 transition hover:scale-105 active:scale-115 focus:outline-none"
        {...longPressEvent}
      >
        Sayıyı arttır {count}
      </button>
    </div>
  );
}

export default HomePage;
