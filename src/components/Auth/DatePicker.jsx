import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BeautifulDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const datePickerRef = useRef(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleIconClick = () => {
    setIsOpen(!isOpen);
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(!isOpen);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="relative">
        <DatePicker
          ref={datePickerRef}
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy" // Customize the date format
          open={isOpen}
          className=" bg-[#212530] outline-none border-0 w-full p-2 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={handleIconClick}
          style={{ zIndex: 1, pointerEvents: "all" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 15l-2 2m0 0l2-2m-2 2h14a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v7a2 2 0 002 2z"
          />
        </svg>
      </div>
    </div>
  );
};

export default BeautifulDatePicker;
