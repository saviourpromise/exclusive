import Image from "next/image";
import { image } from "../Image";
import { useEffect, useState } from "react";

const SalesCountdown = () => {
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
      <div className="flex mx:px-4 mx:items-center mx:flex-col px-32 justify-between">
        <div className="flex mx:flex-col gap-16">
          <p className="text-3xl font-semibold mt-3">Flash Sales</p>
          <div className="text-2xl flex gap-3">
            <div className="flex flex-col justify-center items-center">
              <p className="text-[10px] leading-4 font-bold">DAYS</p>
              <span id="days" className="font-bold">
                {time.days}
              </span>
            </div>

            <span className="text-[#DB4444] mt-[14px]">:</span>

            <div className="flex flex-col justify-center items-center">
              <p className="text-[10px] leading-4 font-bold">HOURS</p>
              <span id="hrs" className="font-bold">
                {time.hours}
              </span>
            </div>

            <span className="text-[#DB4444] mt-[14px]">:</span>

            <div className="flex flex-col justify-center items-center">
              <p className="text-[10px] leading-4 font-bold">MINUTES</p>
              <span id="min" className="font-bold">
                {time.minutes}
              </span>
            </div>

            <span className="text-[#DB4444] mt-[14px]">:</span>

            <div className="flex flex-col justify-center items-center">
              <p className="text-[10px] leading-4 font-bold">SECONDS</p>
              <span id="sec" className="font-bold">
                {time.seconds}
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mx:hidden">
          <Image src={image.left} priority className="cursor-pointer" />
          <Image src={image.right} priority className="cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

export default SalesCountdown
