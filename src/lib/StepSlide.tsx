import { Children, useEffect, useRef, useState } from "react";

type StepSlideT = {
  setCurrentInd: React.Dispatch<React.SetStateAction<number>>;
  currentInd: number;
  resetScrollLock?: number;
  className: string;
  children: React.ReactNode;
};

function StepSlide({
  setCurrentInd,
  currentInd,
  resetScrollLock = 1000,
  className,
  children,
}: StepSlideT) {
  const elRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isScrolled, setIsScrolled] = useState(false); // Track whether scrolling is in progress
  const [initialWidth, setInitialWidth] = useState(elRef.current?.length);
  useEffect(() => {
    setInitialWidth(elRef.current?.length);

    function handleWheel(e: WheelEvent) {
      // Prevent scroll if already in progress
      if (isScrolled) return;

      // Start the scroll action and lock scrolling
      setIsScrolled(true);
      const ScrollDirection = e.deltaY > 0 ? 1 : -1;

      setCurrentInd((prevInd) => {
        let newIndex = prevInd;

        // Determine new index based on scroll direction
        if (ScrollDirection === 1 && prevInd < elRef.current.length - 1) {
          newIndex = prevInd + 1;
        } else if (ScrollDirection === -1 && prevInd > 0) {
          newIndex = prevInd - 1;
        }

        // Smoothly scroll to the new page
        window.scrollTo({
          top: elRef.current[newIndex]?.offsetTop,
          left: elRef.current[newIndex]?.offsetLeft,
          behavior: "smooth",
        });

        return newIndex; // Return updated index
      });

      // Reset scrolling lock after the scroll animation completes (1 second)
      setTimeout(() => {
        setIsScrolled(false);
      }, resetScrollLock); // Timeout duration should match the duration of the smooth scroll
    }

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isScrolled, resetScrollLock, setCurrentInd]); // UseEffect depends on the `isScrolled` state

  useEffect(() => {
    if (currentInd > elRef.current?.length - 1) {
      setCurrentInd(elRef.current?.length - 1);
    }

    if (currentInd < 0) {
      setCurrentInd(0);
    }
    window.scrollTo({
      top: elRef.current[currentInd]?.offsetTop,
      left: elRef.current[currentInd]?.offsetLeft,
      behavior: "smooth",
    });
  }, [currentInd, setCurrentInd]);

  const childrenWithRef =
    Children.map(children, (child, index) => (
      <div
        ref={(el) => {
          if (el) elRef.current[index] = el;
        }}
      >
        {child}
      </div>
    )) || [];

  return (
    <div
      style={{
        width: initialWidth > 0 ? `${initialWidth * 100}vw` : "100vw",
        overflow: "hidden",
      }}
      className={className}
    >
      {childrenWithRef}
    </div>
  );
}

export default StepSlide;
