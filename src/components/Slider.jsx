import { useEffect, useRef, useState } from "react";

export default function Slider({ imagePath }) {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const [offset, setOffset] = useState(null);
  const [clicked, setClicked] = useState(0);

  const slideReady = (e) => {
    e.preventDefault();
    setClicked(1);
  };

  useEffect(() => {
    setOffset({ w: containerRef.current.offsetWidth !== 0 ? containerRef.current.offsetWidth : window.innerWidth });
  }, [containerRef.current]);

  useEffect(() => {
    containerRef.current.style.width = `${offset?.w / 4}px`;
  }, [offset]);

  useEffect(() => {
    const getCursorPos = (e) => {
      e = e.changedTouches ? e.changedTouches[0] : e;
      let a = containerRef.current.getBoundingClientRect();
      let x = e.pageX - a.left;
      x = x - window.pageXOffset;
      return x;
    };

    const slide = (pos) => {
      containerRef.current.style.width = `${pos}px`;
      sliderRef.current.style.left = `${containerRef.current.offsetWidth - sliderRef.current.offsetWidth / 2}px`;
    };

    const slideFinish = () => {
      setClicked(0);
    };

    const slideMove = (e) => {
      let pos;
      if (clicked == 0) return false;
      pos = getCursorPos(e);
      if (pos < 0) pos = 0;
      if (pos > offset.w) pos = offset.w;
      slide(pos);
    };

    if (clicked == 1) {
      window.addEventListener("mouseup", slideFinish);
      window.addEventListener("touchend", slideFinish);
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    return () => {
      window.removeEventListener("mouseup", slideFinish);
      window.removeEventListener("touchend", slideFinish);
      window.removeEventListener("mousemove", slideMove);
      window.removeEventListener("touchmove", slideMove);
    };
  }, [clicked]);

  useEffect(() => {
    const handleScroll = () => {
      sliderRef.current.style.top = `${window.innerHeight / 2 + window.pageYOffset}px`;
    };
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <>
      <div
        className="img-comp-slider absolute z-10 cursor-ew-resize w-10 h-10 bg-[#2196f3] opacity-50 rounded-[50%] top-[50vh] left-[calc(25vw-20px)]"
        ref={sliderRef}
        onMouseDown={slideReady}
        onTouchStart={slideReady}
      />
      <div
        className="img-comp-img img-comp-overlay top-0 left-0 w-auto absolute max-w-max h-max overflow-hidden text-left"
        ref={containerRef}
      >
        <img
          className="top-0 left-0 block h-max object-none w-max max-w-max"
          src={imagePath}
        />
      </div>
    </>
  );
}
