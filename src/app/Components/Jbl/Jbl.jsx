import Image from "next/image";
import { image } from "../Image";
import { useEffect, useState } from "react";

const Jbl = () => {
    const [time, setTime] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
    
      useEffect(() => {
        const updateClock = () => {
          const currentTime = new Date();
          const days = String(currentTime.getDay()).padStart(2, "0");
          const hours = String(currentTime.getHours()).padStart(2, "0");
          const minutes = String(currentTime.getMinutes()).padStart(2, "0");
          const seconds = String(currentTime.getSeconds()).padStart(2, "0");
    
          setTime({ days, hours, minutes, seconds });
        };
    
        const intervalId = setInterval(updateClock, 1000);
        updateClock();
    
        return () => clearInterval(intervalId);
      }, []);
  return (
    <div>
       <div className="flex mx:mx-4 mx:flex-col mx:gap-20 mt-20 mb-10 rounded mx-32 sea justify-between p-8 bg-black">
        <div className="flex flex-col gap-10">
          <p className="text-base font-semibold text-[#00FF66]">Categories</p>
          <p className="text-5xl mx:text-3xl font-semibold leading-[3.4rem] text-white">
            Enhance Your <br /> Music Experience
          </p>

          <div className="flex gap-4">
            <div className="flex flex-col-reverse justify-center items-center bg-white rounded-full w-12 h-12">
              <p className="text-[10px] leading-4 font-bold">DAYS</p>
              <span id="days" className="font-bold">
                {time.days}
              </span>
            </div>

            <div className="flex flex-col-reverse justify-center items-center bg-white rounded-full w-14 h-14">
              <p className="text-[10px] leading-4 font-bold">HOURS</p>
              <span id="hrs" className="font-bold">
                {time.hours}
              </span>
            </div>

            <div className="flex flex-col-reverse justify-center items-center bg-white rounded-full w-[3.7rem] h-[3.7rem]">
              <p className="text-[10px] leading-4 font-bold">MINUTES</p>
              <span id="hrs" className="font-bold">
                {time.minutes}
              </span>
            </div>

            <div className="flex flex-col-reverse justify-center items-center bg-white rounded-full w-[4rem] h-[4rem]">
              <p className="text-[10px] leading-4 font-bold">SECONDS</p>
              <span id="hrs" className="font-bold">
                {time.seconds}
              </span>
            </div>
          </div>

          <div>
            <button className="bg-[#00FF66] text-[#FAFAFA] px-8 py-2 font-medium rounded-md text-base">
              BUY NOW!
            </button>
          </div>
        </div>

        <Image src={image.jbl} className="w-[60%] mx:w-[100%] jbl" />
      </div>
    </div>
  )
}

export default Jbl
