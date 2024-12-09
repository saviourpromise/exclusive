import Image from "next/image";
import { image } from "../Image";

const NewArrival = () => {
  return (
    <div>
       <div className="flex mx:mx-4 mx:flex-col mx:gap-10 justify-between mx-32 mt-20 mb-20">
        <div className="bg-[#0D0D0D] relative owe px-6 pt-20 rounded-md">
          <div className="flex flex-col gap-3 shas mx:absolute mx:top-[64%] z-[1]">
            <p className="text-2xl font-semibold text-white">PlayStation 5</p>
            <p className="text-sm font-medium text-white">
              Black and White version of the PS5 <br /> coming out on sale.
            </p>
            <p
              className="text-base font-medium text-white"
            >
              <a href="" className="border-b-[1px] border-b-gray-600 pb-[2px]">Shop Now</a>
            </p>
          </div>
          <Image src={image.ps5} className="pss mx:w-[100%]" />
        </div>

        <div className="flex flex-col gap-5">
          <div className="bg-[#0D0D0D] relative pl-20 pr-1 dash rounded-md">
            <Image src={image.woman} className="pss" />
            <div className="flex flex-col gap-3 z-[1] mx:absolute mx:top-[25%] index">
              <p className="text-2xl font-semibold text-white">Women’s Collections</p>
              <p className="text-sm font-medium text-white">
                Featured woman collections that <br /> give you another vibe.
              </p>
              <p
                className="text-base font-medium text-white"
              >
                <a href="" className="border-b-[1px] border-b-gray-600 pb-[2px]">Shop Now</a>
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="bg-[#0D0D0D] relative rounded-md way p-[25px] pt-[42px]">
              <Image src={image.mp3} className="pss" />
              <div className="flex flex-col gap-2 z-[1] mx:absolute mx:top-[35%] indexes">
                <p className="text-2xl font-semibold text-white">Speakers</p>
                <p className="text-sm font-medium text-white">
                  Amazon wireless speakers
                </p>
                <p
                  className="text-base font-medium text-white"
                >
                  <a href="" className="border-b-[1px] border-b-gray-600 pb-[2px]">Shop Now</a>
                </p>
              </div>
            </div>
            <div className="bg-[#0D0D0D] relative way rounded-md p-[25px] pt-[42px]">
              <Image src={image.perfume} className="pss" />
              <div className="flex flex-col gap-2 z-[1] mx:absolute mx:top-[35%] indexes">
                <p className="text-2xl font-semibold text-white">Perfume</p>
                <p className="text-sm font-normal text-white">
                  GUCCI INTENSE OUD EDP
                </p>
                <p
                  className="text-base font-medium text-white"
                >
                  <a href="" className="border-b-[1px] border-b-gray-600 pb-[2px]">Shop Now</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewArrival
