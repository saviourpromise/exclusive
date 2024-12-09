import Image from "next/image";
import { image } from "../Image";


const Qualifications = () => {
    const rateForFreeDelivery = "$140";
    const daysOfGuarantee = "30";
  return (
    <div>
       <div className="flex mx:mx-4 mx:grid mx:grid-cols-1 mx:justify-center mx:gap-10 mx-60 justify-between my-10">
        <div className="flex flex-col gap-2 items-center justify-center">
          <Image src={image.free} className="mb-4" />
          <p className="text-xl font-semibold">FREE AND FAST DELIVERY</p>
          <p className="text-sm font-medium">Free delivery for all orders over {rateForFreeDelivery}</p>
        </div>

        <div className="flex flex-col gap-2 items-center justify-center">
          <Image src={image.fast} className="mb-4" />
          <p className="text-xl font-semibold">24/7 CUSTOMER SERVICE</p>
          <p className="text-sm font-medium">Friendly 24/7 customer support</p>
        </div>

        <div className="flex flex-col gap-2 items-center justify-center">
          <Image src={image.verify} className="mb-4" />
          <p className="text-xl font-semibold">MONEY BACK GUARANTEE</p>
          <p className="text-sm font-medium">We return money within {daysOfGuarantee} days</p>
        </div>
      </div>
    </div>
  )
}

export default Qualifications
