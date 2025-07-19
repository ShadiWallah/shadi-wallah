import React, { useRef, useEffect } from "react";

function CustomCarousel({ children }: { children: React.ReactNode }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const carouselBoxRef = useRef<HTMLDivElement>(null);
  let intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const { slides } = getCarouselSlides();
    slides[0].classList.add("opacity-100");
    carsouselStart();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const carsouselStart = () => {
    const { slides, totalSlides } = getCarouselSlides();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const newIndex = prev === totalSlides - 1 ? 0 : prev + 1;
        [...slides].forEach((slide, index) => {
          index !== newIndex
            ? slide.classList.add("opacity-0")
            : slide.classList.remove("opacity-0");
        });
        return newIndex;
      });
    }, 2000);
  };
  const getCarouselSlides = () => {
    const carouselBox = carouselBoxRef.current;
    if (!carouselBox) return { slides: [], totalSlides: 0 };
    const slides = carouselBox.children;
    const totalSlides = slides.length;
    return { slides, totalSlides };
  };
    if (intervalRef.current) clearInterval(intervalRef.current);
  const handlePrevious = () => {
    if (intervalRef.current !== null) {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current as NodeJS.Timeout);
      }
    }
    const { slides, totalSlides } = getCarouselSlides();
    const newIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    [...slides].forEach((slide, index) => {
      index !== newIndex
        ? slide.classList.add("opacity-0")
        : slide.classList.remove("opacity-0");
    });
    setCurrentIndex(newIndex);
    carsouselStart();
  };

  const handleNext = () => {
    clearInterval(intervalRef.current as NodeJS.Timeout);
    const { slides, totalSlides } = getCarouselSlides();
    const newIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
    [...slides].forEach((slide, index) => {
      index !== newIndex
        ? slide.classList.add("opacity-0")
        : slide.classList.remove("opacity-0");
    });
    setCurrentIndex(newIndex);
    carsouselStart();
  };
  const handlePointers = (indexDot:number)=>{
    clearInterval(intervalRef.current as NodeJS.Timeout);
    const { slides } = getCarouselSlides();
    [...slides].forEach((slide, index) => {
        index !== indexDot
          ? slide.classList.add("opacity-0")
          : slide.classList.remove("opacity-0");
      });
    setCurrentIndex(indexDot);
    carsouselStart();
  }
  return (
    <div className="relative flex justify-center w-full top-20">
      <section
        className="relative w-3xl flex flex-col items-center"
        ref={carouselBoxRef}
        onMouseEnter={() => clearInterval(intervalRef.current as NodeJS.Timeout)}
        onMouseLeave={() => carsouselStart()}
      >
        {children}
      </section>
      <button
        className="absolute left-40 top-50 bg-grape rounded-b-sm p-4 cursor-pointer"
        onClick={handlePrevious}
      >
        {"<"}Prev
      </button>
      <button
        className="absolute right-40 top-50 p-4 bg-grape rounded-b-sm cursor-pointer"
        onClick={handleNext}
      >
        Next{">"}
      </button>
      {currentIndex}
      {React.Children.toArray(children).length > 0 ? (
        <div className="absolute top-90 left-1/2 transform -translate-x-1/2 flex gap-4">
          {React.Children.toArray(children).map((_, index) => {
            return <span key={index} className={`p-1 rounded-full ${index===currentIndex ?'bg-grape': 'bg-black'}`}
            onClick={()=>handlePointers(index)}
            ></span>;
          })}
        </div>
      ) : null}
    </div>
  );
}


export default CustomCarousel;
