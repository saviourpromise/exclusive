import Image from "next/image";
import { image } from "../Image";

const ProductTypes = () => {
    return(
        <div>
            <section className="flex mx:flex-col mx:px-4 px-32 justify-between">
        <div className="flex flex-col gap-6 pr-6 border-r-[1px]">
          <div className="flex gap-14 pt-10">
            <p className="text-sm font-medium">Women&apos;s Fashion</p>
            <div>
              <a href="">
                <Image src={image.right_arrow} className="mt-1" />
              </a>
            </div>
          </div>
          <div className="flex gap-[4.9rem]">
            <p className="text-sm font-medium">Men&apos;s Fashion</p>
            <div>
              <a href="">
                <Image src={image.right_arrow} className="mt-1" />
              </a>
            </div>
          </div>
          <p className="text-sm font-medium">Electronics</p>
          <p className="text-sm font-medium">Home & Lifestyle</p>
          <p className="text-sm font-medium">Medicine</p>
          <p className="text-sm font-medium">Sports & Outdoor</p>
          <p className="text-sm font-medium">Baby&apos;s & Toys</p>
          <p className="text-sm font-medium">Groceries & Pets</p>
          <p className="text-sm font-medium">Health & Beauty</p>
        </div>

        <div className="flex mx:flex-col bg-[#000000] mx:pl-4 pl-24 mt-10 pt-14">
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <Image src={image.apple} />
              <p className="text-base font-medium mt-4 text-white">
                Iphone 14 Series
              </p>
            </div>

            <p className="text-5xl leading-[55px] font-semibold text-white">
              Up to 10% <br /> off Voucher
            </p>

            <div className="flex gap-4">
              <p className="font-semibold border-b-2 border-b-gray-600 pb-[2px] text-white">
                <a href="">Shop Now</a>
              </p>
              <div>
                <Image src={image.arrow} className="mt-2" />
              </div>
            </div>
          </div>
          <Image src={image.iphone} className="w-[60%]" />
        </div>
      </section>
        </div>
    )
}

export default ProductTypes