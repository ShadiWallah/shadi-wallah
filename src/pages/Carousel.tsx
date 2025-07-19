import { useRef } from "react";

export default function Carousel({ children }) {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const container = containerRef.current;
    const width = container.offsetWidth;

    if (direction === "left") {
      container.scrollBy({ left: -width, behavior: "smooth" });
    } else {
      container.scrollBy({ left: width, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full overflow-hidden top-20">
      {/* Content container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory"
      >
        {children}
      </div>

      {/* Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        ◀
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        ▶
      </button>
    </div>
  );
}
