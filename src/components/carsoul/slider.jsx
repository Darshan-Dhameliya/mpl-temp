// components/Carousel.js

import { useState, useRef } from "react";
import GameCard from "../@core/GameCard";
import useDeviceType from "@/helper/useDeviceType";
import Image from "next/image";

const Slider = ({ items, parentClass }) => {
  const carouselRef = useRef(null);
  const currentIndex = useRef(0);
  const [activeDot, setactiveDot] = useState(0);

  const { isMobile, isTablet } = useDeviceType();
  let batch = 0;
  if (isMobile) {
    batch = 1;
  } else if (isTablet) {
    batch = 2;
  } else {
    batch = 3;
  }

  const showNext = () => {
    const newBatchStart = currentIndex.current + batch;

    if (newBatchStart < items.length) {
      currentIndex.current = newBatchStart;
      scrollToIndex(currentIndex.current);
    }
  };

  const dotScroll = (index) => {
    const newBatchStart = index * batch;

    if (newBatchStart < items.length) {
      currentIndex.current = newBatchStart;
      scrollToIndex(currentIndex.current);
    }
  };

  const showPrev = () => {
    const newBatchStart = currentIndex.current - batch;
    if (newBatchStart >= 0) {
      currentIndex.current = newBatchStart;
      scrollToIndex(currentIndex.current);
    }
  };

  const scrollToIndex = (index) => {
    setactiveDot(Math.ceil(index / batch));
    const item = carouselRef.current.querySelector(`[data-index="${index}"]`);
    if (item) {
      item.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start", // Adjust this to your preference
      });
    }
  };

  return (
    <div className={parentClass}>
      <div className="relative h-full mb-4 w-full px-6">
        <button className="absolute z-10  top-1/2 -translate-x-1/2">
          <PrevIcon onClick={showPrev} />
        </button>
        <div className="h-full flex overflow-hidden" ref={carouselRef}>
          {items.map((item, index) => (
            <div
              className="flex-none h-56 px-2 rounded-xl mob:w-full tab:w-1/2 lap:w-1/3 xl:w-1/3 " // Adjusted width here
              key={index}
              data-index={index}
            >
              <Image src={item?.img} className="h-full w-full " />
            </div>
          ))}
        </div>
        <button className="absolute -right-3 top-1/2 -translate-x-1/2">
          <NextIcon onClick={showNext} />
        </button>
      </div>
      <div className="justify-center items-center flex">
        {Array.from({ length: Math.ceil(items.length / batch) }).map(
          (_, batchIndex) => (
            <button
              key={batchIndex}
              className={`w-3 h-3 mx-1 rounded-full ${
                activeDot === batchIndex ? "bg-[#80879A]" : "bg-[#333947]"
              }`}
              onClick={() => dotScroll(batchIndex)}
            />
          )
        )}
      </div>
    </div>
  );
};

const PrevIcon = ({ onClick, ...props }) => {
  return (
    <svg
      role="button"
      xmlns="http://www.w3.org/2000/svg"
      width="37"
      height="37"
      viewBox="0 0 37 37"
      fill="none"
      onClick={onClick}
      {...props}
    >
      <rect
        width="36.5519"
        height="36.5519"
        rx="8.02358"
        transform="matrix(-1 0 0 1 36.5527 0)"
        fill="#3D4351"
      />
      <path
        d="M15.9178 16.0698L20.0062 11.9813C20.2571 11.7306 20.5973 11.5898 20.952 11.5898C21.3067 11.5899 21.6468 11.7309 21.8976 11.9818C22.1483 12.2326 22.2891 12.5728 22.2891 12.9275C22.289 13.2822 22.148 13.6224 21.8971 13.8731L17.8087 17.9607C17.7672 18.0021 17.7342 18.0513 17.7118 18.1054C17.6893 18.1596 17.6777 18.2176 17.6777 18.2763C17.6777 18.3349 17.6893 18.393 17.7118 18.4471C17.7342 18.5013 17.7672 18.5505 17.8087 18.5919L21.8971 22.6794C22.148 22.9302 22.289 23.2703 22.2891 23.625C22.2891 23.9797 22.1483 24.3199 21.8976 24.5708C21.6468 24.8216 21.3067 24.9626 20.952 24.9627C20.5973 24.9628 20.2571 24.822 20.0062 24.5712L15.9178 20.4828C15.3336 19.897 15.0056 19.1035 15.0056 18.2763C15.0056 17.449 15.3336 16.6555 15.9178 16.0698Z"
        fill="#FBFFFF"
      />
    </svg>
  );
};

const NextIcon = ({ onClick }) => {
  return (
    <svg
      role="button"
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="37"
      height="37"
      viewBox="0 0 37 37"
      fill="none"
    >
      <rect
        x="0.359375"
        width="36.5519"
        height="36.5519"
        rx="8.02358"
        fill="#3D4351"
      />
      <path
        d="M20.9943 16.0698L16.9059 11.9813C16.655 11.7306 16.3148 11.5898 15.9601 11.5898C15.6054 11.5899 15.2653 11.7309 15.0145 11.9818C14.7638 12.2326 14.623 12.5728 14.623 12.9275C14.6231 13.2822 14.7641 13.6224 15.015 13.8731L19.1034 17.9607C19.1449 18.0021 19.1779 18.0513 19.2004 18.1054C19.2228 18.1596 19.2344 18.2176 19.2344 18.2763C19.2344 18.3349 19.2228 18.393 19.2004 18.4471C19.1779 18.5013 19.1449 18.5505 19.1034 18.5919L15.015 22.6794C14.7641 22.9302 14.6231 23.2703 14.623 23.625C14.623 23.9797 14.7638 24.3199 15.0145 24.5708C15.2653 24.8216 15.6054 24.9626 15.9601 24.9627C16.3148 24.9628 16.655 24.822 16.9059 24.5712L20.9943 20.4828C21.5785 19.897 21.9065 19.1035 21.9065 18.2763C21.9065 17.449 21.5785 16.6555 20.9943 16.0698Z"
        fill="#FBFFFF"
      />
    </svg>
  );
};

export default Slider;
