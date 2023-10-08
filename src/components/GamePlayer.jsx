import useDisclose from "@/helper/useDisclose";
import React from "react";
import Button from "./@core/Button";

export default function GamePlayer({ url, onClose }) {
  const { isOpen: isShowPlayer, open: showPlayer } = useDisclose();
  return isShowPlayer ? (
    <div className="relative h-full">
      <iframe src={url} className="w-full h-full" />
      <button
        className="absolute right-3 top-3 bg-darkPrimary px-2  text-base rounded-full"
        onClick={onClose}
      >
        close
      </button>
    </div>
  ) : (
    <div className="h-full relative bg-darkPrimary flex justify-center items-center gap-3  w-full">
      <button
        className="absolute right-3 top-3 bg-darkSecondary px-2  text-base rounded-full"
        onClick={onClose}
      >
        close
      </button>
      <Button onClick={showPlayer}>Real Play</Button>
      <Button onClick={showPlayer} variant="secondary">
        Fun Play
      </Button>
    </div>
  );
}
