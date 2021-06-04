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
    <div className="main">
      <button
        className="button"
        {...longPressEvent}
      >
        Sayıyı arttır {count}
      </button>
    </div>
  );
}

export default HomePage;
