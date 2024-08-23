"use client";
import Image from "next/image";
import { image } from "../Image";

const Footer = () => {
    return (
        <footer className="bg-[#000000] mt-10">
            <div className="flex gap-4 px-32 py-16 justify-between">
                <div className="flex flex-col gap-4">
                    <p className="text-2xl font-bold text-white">Exclusive</p>
                    <p className="text-xl font-medium text-white">Subscribe</p>
                    <p className="text-sm font-normal text-white">Get 10% off your first order</p>
                    <div className="relative">
                        <input type="text" className="bg-inherit border border-[#FAFAFA] placeholder:text-base placeholder:font-normal text-white p-2 rounded" placeholder="Enter your email" />
                        <Image src={image.send} className="absolute top-[9px] left-36" />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <p className="text-xl font-medium text-white">Support</p>
                    <p className="text-sm font-normal text-white">111 Bijoy sarani, Dhaka,<br />  DH 1515, Bangladesh.</p>
                    <p className="text-sm font-normal text-white">exclusive@gmail.com</p>
                    <p className="text-sm font-normal text-white">+88015-88888-9999</p>
                </div>

                <div className="flex flex-col gap-3">
                    <p className="text-xl font-medium text-white">Account</p>
                    <p className="text-sm font-normal text-white">My Account</p>
                    <p className="text-sm font-normal text-white">Login / Register</p>
                    <p className="text-sm font-normal text-white">Cart</p>
                    <p className="text-sm font-normal text-white">Wishlist</p>
                    <p className="text-sm font-normal text-white">Shop</p>
                </div>

                <div className="flex flex-col gap-3">
                    <p className="text-xl font-medium text-white">Quick Link</p>
                    <p className="text-sm font-normal text-white">Privacy Policy</p>
                    <p className="text-sm font-normal text-white">Terms Of Use</p>
                    <p className="text-sm font-normal text-white">FAQ</p>
                    <p className="text-sm font-normal text-white">Contact</p>
                </div>

                <div className="flex flex-col gap-3">
                    <p className="text-xl font-medium text-white">Download App</p>
                    <p className="text-[13px] leading-[18px] font-normal text-[#FAFAFA]">Save $3 with App New User Only</p>
                    <div className="flex gap-2">
                        <Image src={image.Qrcode} />
                        <div className="flex flex-col gap-[12px]">
                        <div>
                            <Image src={image.appstore} />
                        </div>
                        <div>
                            <Image src={image.google} />
                        </div>
                        </div>
                    </div>
                    <div className="flex gap-8">
                        <Image src={image.facebook} />
                        <Image src={image.twitter} />
                        <Image src={image.instagram} />
                        <Image src={image.linkdin} />
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center gap-2 border-t border-t-[#39393a] py-3">
                <Image src={image.copyright} className="mt-[2px]" />
                <p className="text-base font-medium text-[#39393a]">Copyright Rimel 2022. All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;