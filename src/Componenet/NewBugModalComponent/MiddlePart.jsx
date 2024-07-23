
import { Avatar } from "@mui/material";
import { CiCalendarDate } from "react-icons/ci";
import { useState } from "react";

function MiddlePart() {

    const [showCalendar, setShowCalendar] = useState(false);


  const handleCalendarClick = () => {
    setShowCalendar(!showCalendar);
  };


  const data = [
    {
      uri: "https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/jgreiner.png",
      alt: "hello",
    },
    {
      uri: "https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/jgreiner.png",
      alt: "hello",
    },
    {
      uri: "",
      alt: "hello",
    },
    {
      uri: "https://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/asteroid_blue.png",
      alt: "hello",
    },
  ];

  return (
   <>
        
        <div className="flex items-center py-5 px-5 space-x-4">
            <h1 className="mr-7">Assign to</h1>
            <div className="flex items-center">
              {data &&
                data.map((item, index) => (
                  <Avatar key={index} uri={item.uri} alt={item.alt} />
                ))}
            </div>
            <h1 className="ml-7">Add Due Date</h1>
            <div
              className="border-2 border-gray-300 border-dashed rounded-full h-[50px] w-[50px] flex items-center justify-center cursor-pointer"
              onClick={handleCalendarClick}
            >
              <CiCalendarDate className="text-3xl" />
            </div>
            {showCalendar && <div className="absolute mt-4"></div>}
          </div>

          <div className="py-3">
            <input
              type="text"
              placeholder="Add tittle here"
              className="w-full px-4 py-4 rounded-sm text-gray-500  border-none text-5xl font-poppins    "
            />
          </div>

          <span className="px-4 py-4">Bug details</span>
          <div className="px-3 py-3">
            <input
              type="text"
              placeholder="Enter details here..."
              className="w-full px-4 py-4 border-2 border-gray-100 rounded-lg focus:outline-none focus:border-gray-500"
            />
          </div>
   </>
  )
}

export default MiddlePart