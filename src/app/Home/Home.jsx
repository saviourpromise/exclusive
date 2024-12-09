"use client";
import { useState, useEffect } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Image from "next/image";
import { image } from "../Components/Image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import ProductTypes from "../Components/ProductTypes/ProductTypes";
import SalesCountdown from "../Components/SalesCountdown/SalesCountdown";
import Jbl from "../Components/Jbl/Jbl";
import NewArrival from "../Components/NewArrival/NewArrival";
import Qualifications from "../Components/Qualifications/Qualifications";

const Home = () => {
  const rateForFreeDelivery = "$140";
  const daysOfGuarantee = "30";
  const [carts, setCarts] = useState(0);
  // const [carts, setCarts] = useState(() => {
  //   const savedCarts = localStorage.getItem('carts');
  //   return savedCarts !== null ? JSON.parse(savedCarts) : 0;
  // });

  // useEffect(() => {
  //   localStorage.setItem('carts', JSON.stringify(carts));
  // }, [carts]);

  const notify = () => toast.success("ADDED!");

  const addToCart = () => {
    setCarts(carts + 1);
    notify();
  };

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
    <div id="home">
      <ToastContainer />
      <Header />

      <section className="flex mx:flex-col mx:px-4 px-32 justify-between pt-8 border-b-[1px] bg-white pb-3">
        <p className="text-2xl font-bold">Exclusive</p>

        <div className="flex gap-7 mt-1 mx:hidden">
          <p className="text-base font-semibold custom-link text-[#6b6767]">
            <a href="">Home</a>
          </p>
          <p className="text-base font-semibold custom-link text-[#6b6767]">
            <a href="">Contact</a>
          </p>
          <p className="text-base font-semibold custom-link text-[#6b6767]">
            <a href="">About</a>
          </p>
          <p className="text-base font-semibold custom-link text-[#6b6767]">
            <a href="">Sign Up</a>
          </p>
        </div>

        <div className="flex gap-4">
          <div className="relative">
            <input
              type="search"
              className="bg-[#F5F5F5] rounded-md placeholder:text-xs placeholder:font-medium p-1 w-[15rem] pl-4"
              placeholder="What are you looking for?"
            />
            <a href="">
              <Image
                src={image.search}
                className="absolute top-[9px] left-[12.7rem] w-4"
              />
            </a>
          </div>
          <a href="">
            <Image src={image.love} className="mt-[7px]" />
          </a>
          <a href="" className="relative">
            <div className="flex items-center h-5 w-5 justify-center rounded-full absolute font-bold left-5 -top-2 text-white p-1 bg-[#DB4444]">
              <p>{carts}</p>
            </div>
            <Image src={image.cart} />
          </a>
          <div
            className="bg-white mac rounded-full relative p-[2px] -mt-1"
          >
            <svg
              className="svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="flex absolute -left-[165.4px] top-9 pop flex-col gap-2 rounded-md p-4">
              <a href="" className="flex gap-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="text-[#FAFAFA] font-normal text-sm mt-[6px]">
                  Manage my account
                </p>
              </a>

              <a href="" className="flex gap-5 pl-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 6.3V20.5C3 20.7652 3.10536 21.0196 3.29289 21.2071C3.48043 21.3946 3.73478 21.5 4 21.5H20C20.2652 21.5 20.5196 21.3946 20.7071 21.2071C20.8946 21.0196 21 20.7652 21 20.5V6.3H3Z"
                    stroke="#FAFAFA"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21 6.3L18.1665 2.5H5.8335L3 6.3M15.7775 9.6C15.7775 11.699 14.0865 13.4 12 13.4C9.9135 13.4 8.222 11.699 8.222 9.6"
                    stroke="#FAFAFA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="text-[#FAFAFA] font-normal text-sm mt-[6px]">
                  My Order
                </p>
              </a>

              <a href="" className="flex gap-5 pl-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_829_4216)">
                    <path
                      d="M8 16L12 12M16 8L11.9992 12M11.9992 12L8 8M12 12L16 16"
                      stroke="#FAFAFA"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="11.25"
                      stroke="white"
                      stroke-width="1.5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_829_4216">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-[#FAFAFA] font-normal text-sm mt-[6px]">
                  My Cancellations
                </p>
              </a>

              <a href="" className="flex gap-5 pl-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.8284 9.93621C20.4517 9.93621 20.7176 10.7286 20.2205 11.1046L16.8905 13.6234C16.1688 14.1693 15.8661 15.1087 16.1334 15.9732L17.3864 20.0261C17.5735 20.6312 16.8729 21.1193 16.3701 20.7341L13.3075 18.3879C12.536 17.7969 11.464 17.7969 10.6925 18.3879L7.61357 20.7466C7.11152 21.1312 6.41161 20.645 6.59677 20.0403L7.83243 16.0046C8.09532 15.146 7.79694 14.2145 7.08413 13.6684L3.73432 11.1022C3.24111 10.7244 3.50831 9.93621 4.12961 9.93621H8.12744C9.07024 9.93621 9.90305 9.32198 10.1815 8.42125L11.379 4.5479C11.5678 3.93721 12.4322 3.93722 12.621 4.5479L13.8185 8.42124C14.0969 9.32198 14.9298 9.93621 15.8726 9.93621H19.8284Z"
                    stroke="#FAFAFA"
                    stroke-width="1.5"
                  />
                </svg>
                <p className="text-[#FAFAFA] font-normal text-sm mt-[6px]">
                  My Reviews
                </p>
              </a>

              <a href="" className="flex gap-5 pl-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12H13.5M6 15L3 12L6 9M11 7V6C11 5.46957 11.2107 4.96086 11.5858 4.58579C11.9609 4.21071 12.4696 4 13 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H13C12.4696 20 11.9609 19.7893 11.5858 19.4142C11.2107 19.0391 11 18.5304 11 18V17"
                    stroke="#FAFAFA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p className="text-[#FAFAFA] font-normal text-sm mt-[6px]">
                  Logout
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <ProductTypes />

      <p className="text-[#DB4444] rounded-md text-base font-semibold border-l-[12px] pl-3 ml-32 mt-20 py-1 mb-4 border-l-[#DB4444]">
        Today&apos;s
      </p>

      <SalesCountdown />

      <div className="mt-10 grid mx:px-4 mx:grid-cols-2 grid-cols-4 gap-4 mx-auto justify-center px-32">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <div className="flex sam relative bg-[#F5F5F5] px-4 pt-4 pb-10 rounded-md">
              <div>
                <p className="bg-[#DB4444] px-[10px] rounded-md pee font-light py-[4px] text-white">
                  -40%
                </p>
              </div>
              <Image src={image.game} priority className="pt-6 -ml-8 w-[80%] mack" />

              <div className="flex flex-col gap-2">
                <Image src={image.heart} className="cursor-pointer" />
                <Image src={image.eye} className="cursor-pointer" />
              </div>
            </div>

            <button
              className="text-white abs font-medium bg-black py-3 add"
              onClick={() => {
                addToCart();
              }}
              id="but"
            >
              Add to cart
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold">HAVIT HV-G92 Gamepad</p>
            <div className="flex gap-2">
              <p className="font-semibold text-[#DB4444]">$120</p>
              <p className="text-gray-400 font-semibold line-through">$160</p>
            </div>
            <div className="flex gap-2">
              <div>
                <Image src={image.five_star} />
              </div>
              <p className="text-gray-400 font-semibold">(88)</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <div className="flex sam relative bg-[#F5F5F5] px-4 pt-4 pb-10 rounded-md">
              <div>
                <p className="bg-[#DB4444] px-[10px] rounded-md pee font-light py-[4px] text-white">
                  -35%
                </p>
              </div>
              <Image src={image.pad} className="pt-6 -ml-8 w-[80%] mack" />

              <div className="flex flex-col gap-2">
                <Image src={image.heart} className="cursor-pointer" />
                <Image src={image.eye} className="cursor-pointer" />
              </div>
            </div>

            <button
              className="text-white abs font-medium bg-black py-3 add"
              onClick={() => {
                addToCart();
              }}
              id="but"
            >
              Add to cart
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold">AK-900 Wired Keyboard</p>
            <div className="flex gap-2">
              <p className="font-semibold text-[#DB4444]">$960</p>
              <p className="text-gray-400 font-semibold line-through">$1160</p>
            </div>
            <div className="flex gap-2">
              <div>
                <Image src={image.four_star} />
              </div>
              <p className="text-gray-400 font-semibold">(75)</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <div className="flex sam relative bg-[#F5F5F5] px-4 pt-4 pb-10 rounded-md">
              <div>
                <p className="bg-[#DB4444] px-[10px] rounded-md pee font-light py-[4px] text-white">
                  -30%
                </p>
              </div>
              <Image src={image.smartTv} className="pt-6 -ml-8 w-[80%] mack" />

              <div className="flex flex-col gap-2">
                <Image src={image.heart} className="cursor-pointer" />
                <Image src={image.eye} className="cursor-pointer" />
              </div>
            </div>

            <button
              className="text-white abs font-medium bg-black py-3 add"
              onClick={() => {
                addToCart();
              }}
              id="but"
            >
              Add to cart
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold">IPS LCD Gaming Monitor</p>
            <div className="flex gap-2">
              <p className="font-semibold text-[#DB4444]">$370</p>
              <p className="text-gray-400 font-semibold line-through">$400</p>
            </div>
            <div className="flex gap-2">
              <div>
                <Image src={image.five_star} />
              </div>
              <p className="text-gray-400 font-semibold">(99)</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <div className="flex sam relative bg-[#F5F5F5] px-4 pt-4 pb-10 rounded-md">
              <div>
                <p className="bg-[#DB4444] px-[10px] rounded-md pee font-light py-[4px] text-white">
                  -25%
                </p>
              </div>
              <Image src={image.chair} className="pt-6 -ml-8 w-[80%] mack" />

              <div className="flex flex-col gap-2">
                <Image src={image.heart} className="cursor-pointer" />
                <Image src={image.eye} className="cursor-pointer" />
              </div>
            </div>
            <button
              className="text-white abs font-medium bg-black py-3 add"
              onClick={() => {
                addToCart();
              }}
              id="but"
            >
              Add to cart
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">S-Series Comfort Chair </p>
            <div className="flex gap-2">
              <p className="font-semibold text-[#DB4444]">$375</p>
              <p className="text-gray-400 font-semibold line-through">$400</p>
            </div>
            <div className="flex gap-2">
              <div>
                <Image src={image.half_star} />
              </div>
              <p className="text-gray-400 font-semibold">(99)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-10 mb-10">
        <button className="bg-[#DB4444] text-white py-2 px-8 text-sm rounded-[4px] text-center">
          View All Products
        </button>
      </div>

      <div className="flex mx:mx-4 flex-col gap-4 mb-20 pb-4 mx-32 border-t-[1px] border-b-[1px]">
        <p className="text-[#DB4444] rounded-md text-base font-semibold border-l-[12px] pl-3 mt-20 py-1 mb-4 border-l-[#DB4444]">
          Categories
        </p>

        <div className="flex justify-between -mt-6">
          <p className="text-3xl font-semibold mt-3">Browse By Category</p>

          <div className="flex gap-2 mx:hidden">
            <Image src={image.left} priority className="cursor-pointer" />
            <Image src={image.right} priority className="cursor-pointer" />
          </div>
        </div>

        <div className="flex mx:grid mx:grid-cols-2 mx:gap-y-4 mx:gap-x-2 justify-between py-10">
          <div
            className="flex flex-col cursor-pointer gap-4 py-3 px-14 justify-center items-center border-[2px] rounded-md"
          >
            <Image src={image.phone} />
            <p className="font-medium">Phones</p>
          </div>

          <div
            className="flex flex-col cursor-pointer gap-4 py-3 justify-center items-center px-8 border-[2px] rounded-md"
          >
            <Image src={image.computer} />
            <p className="font-medium">Computers</p>
          </div>

          <div
            className="flex flex-col cursor-pointer gap-4 py-3 justify-center items-center px-8 border-[2px] rounded-md"
          >
            <Image src={image.smartwatch} />
            <p className="font-medium">SmartWatch</p>
          </div>

          <div
            className="flex flex-col cursor-pointer gap-4 py-3 justify-center items-center px-12 border-[2px] rounded-md"
          >
            <Image src={image.camera} />
            <p className="font-medium">Camera</p>
          </div>

          <div
            className="flex flex-col cursor-pointer gap-4 py-3 justify-center items-center px-8 border-[2px] rounded-md"
          >
            <Image src={image.headphone} />
            <p className="font-medium">HeadPhones</p>
          </div>

          <div
            className="flex flex-col cursor-pointer gap-4 py-3 justify-center items-center px-12 border-[2px] rounded-md"
          >
            <Image src={image.gaming} />
            <p className="font-medium">Gaming</p>
          </div>
        </div>
      </div>

      <div className="flex mx:mx-4 flex-col mx-32 justify-between">
        <p className="text-[#DB4444] rounded-md text-base font-semibold border-l-[12px] pl-3 py-1 mb-4 border-l-[#DB4444]">
          This Month
        </p>
        <div className="flex mx:flex-col justify-between">
          <p className="text-3xl font-semibold">Best Selling Products</p>
          <button className="bg-[#DB4444] mx:hidden text-white py-[10px] px-10 text-sm rounded-[4px] text-center">
            View All
          </button>
        </div>
      </div>

      <div className="mt-10 mx:px-4 mx:grid-cols-2 grid grid-cols-4 gap-4 mx-auto justify-center px-32">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <div className="flex sam relative bg-[#F5F5F5] px-4 pt-4 pb-10 rounded-md">
              <Image src={image.cloth} className="pt-6 w-[77%] mack ml-8" />

              <div className="flex flex-col gap-2">
                <Image src={image.heart} className="cursor-pointer" />
                <Image src={image.eye} className="cursor-pointer" />
              </div>
            </div>
            <button
              className="text-white abs font-medium bg-black py-3 add"
              onClick={() => {
                addToCart();
              }}
              id="but"
            >
              Add to cart
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold">The north coat</p>
            <div className="flex gap-2">
              <p className="font-semibold text-[#DB4444]">$260</p>
              <p className="text-gray-400 font-semibold line-through">$360</p>
            </div>
            <div className="flex gap-2">
              <div>
                <Image src={image.five_star} />
              </div>
              <p className="text-gray-400 font-semibold">(65)</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">

          <div className="flex flex-col">
            <div className="flex sam relative bg-[#F5F5F5] px-4 pt-4 pb-10 rounded-md">
              <Image src={image.gucci} className="pt-6 w-[77%] mack ml-8" />

              <div className="flex flex-col gap-2">
                <Image src={image.heart} className="cursor-pointer" />
                <Image src={image.eye} className="cursor-pointer" />
              </div>
            </div>

            <button
              className="text-white abs font-medium bg-black py-3 add"
              onClick={() => {
                addToCart();
              }}
              id="but"
            >
              Add to cart
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold">Gucci duffle bag</p>
            <div className="flex gap-2">
              <p className="font-semibold text-[#DB4444]">$960</p>
              <p className="text-gray-400 font-semibold line-through">$1160</p>
            </div>
            <div className="flex gap-2">
              <div>
                <Image src={image.half_star} />
              </div>
              <p className="text-gray-400 font-semibold">(65)</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">

          <div className="flex flex-col">
            <div className="flex sam relative bg-[#F5F5F5] px-4 pt-4 pb-10 rounded-md">
              <Image src={image.speak} className="pt-6 w-[77%] mack ml-8" />

              <div className="flex flex-col gap-2">
                <Image src={image.heart} className="cursor-pointer" />
                <Image src={image.eye} className="cursor-pointer" />
              </div>
            </div>

            <button
              className="text-white abs font-medium bg-black py-3 add"
              onClick={() => {
                addToCart();
              }}
              id="but"
            >
              Add to cart
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold">RGB liquid CPU Cooler</p>
            <div className="flex gap-2">
              <p className="font-semibold text-[#DB4444]">$160</p>
              <p className="text-gray-400 font-semibold line-through">$170</p>
            </div>
            <div className="flex gap-2">
              <div>
                <Image src={image.half_star} />
              </div>
              <p className="text-gray-400 font-semibold">(65)</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">

          <div className="flex flex-col">
            <div className="flex sam relative bg-[#F5F5F5] px-4 pt-4 pb-10 rounded-md">
              <Image src={image.bookshelf} className="pt-6 w-[77%] mack ml-8" />

              <div className="flex flex-col gap-2">
                <Image src={image.heart} className="cursor-pointer" />
                <Image src={image.eye} className="cursor-pointer" />
              </div>
            </div>

            <button
              className="text-white abs font-medium bg-black py-3 add"
              onClick={() => {
                addToCart();
              }}
              id="but"
            >
              Add to cart
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold">Small BookSelf</p>
            <div className="flex gap-2">
              <p className="font-semibold text-[#DB4444]">$360</p>
            </div>
            <div className="flex gap-2">
              <div>
                <Image src={image.five_star} />
              </div>
              <p className="text-gray-400 font-semibold">(65)</p>
            </div>
          </div>
        </div>
      </div>

      <Jbl />

      <div className="flex mx:mx-4 flex-col mx-32 gap-4">
        <p className="text-[#DB4444] rounded-md text-base font-semibold border-l-[12px] pl-3 mt-20 py-1 mb-4 border-l-[#DB4444]">
          Our Products
        </p>

        <div className="flex justify-between -mt-6">
          <p className="text-3xl font-semibold mt-3">Explore Our Products</p>

          <div className="flex mx:hidden gap-2">
            <Image src={image.left} priority className="cursor-pointer" />
            <Image src={image.right} priority className="cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="mt-10 mx:px-4 mx:grid-cols-2 grid grid-cols-4 gap-4 mx-auto justify-center px-32">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <div className="flex sam relative bg-[#F5F5F5] px-4 pt-4 pb-10 rounded-md">
              <Image src={image.dog} className="pt-6 w-[74%] mb-5 mack ml-8" />

              <div className="flex flex-col gap-2">
                <Image src={image.heart} className="cursor-pointer w-5" />
                <Image src={image.eye} className="cursor-pointer w-5" />
              </div>
            </div>
            <button
              className="text-white abs font-medium bg-black py-3 add"
              onClick={() => {
                addToCart();
              }}
              id="but"
            >
              Add to cart
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">Breed Dry Dog Food Sachet</p>
            <div className="flex gap-2">
              <p className="font-semibold text-[#DB4444]">$100</p>
              <div className="flex gap-2">
                <div>
                  <Image src={image.three_star} className="mt-[2px]" />
                </div>
                <p className="text-gray-400 font-semibold">(35)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <div className="flex sam relative bg-[#F5F5F5] px-4 pt-4 pb-10 rounded-md">
              <Image src={image.snap} className="pt-6 w-[74%] mb-5 mack ml-8" />

              <div className="flex flex-col gap-2">
                <Image src={image.heart} className="cursor-pointer w-5" />
                <Image src={image.eye} className="cursor-pointer w-5" />
              </div>

            </div>
            <button
              className="text-white abs font-medium bg-black py-3 add"
              onClick={() => {
                addToCart();
              }}
              id="but"
            >
              Add to cart
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">CANON EOS DSLR Camera</p>
            <div className="flex gap-2">
              <p className="font-semibold text-[#DB4444]">$360</p>
              <div className="flex gap-2">
                <div>
                  <Image src={image.four_star} className="mt-[2px]" />
                </div>
                <p className="text-gray-400 font-semibold">(95)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <div className="flex sam relative bg-[#F5F5F5] px-4 pt-4 pb-10 rounded-md">
              <Image src={image.laptop} className="pt-6 w-[74%] mb-5 mack ml-8" />

              <div className="flex flex-col gap-2">
                <Image src={image.heart} className="cursor-pointer w-5" />
                <Image src={image.eye} className="cursor-pointer w-5" />
              </div>

            </div>

            <button
              className="text-white abs font-medium bg-black py-3 add"
              onClick={() => {
                addToCart();
              }}
              id="but"
            >
              Add to cart
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold">ASUS FHD Gaming Laptop</p>
            <div className="flex gap-2">
              <p className="font-semibold text-[#DB4444]">$700</p>
              <div className="flex gap-2">
                <div>
                  <Image src={image.five_star} className="mt-[2px]" />
                </div>
                <p className="text-gray-400 font-semibold">(325)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <div className="flex sam relative bg-[#F5F5F5] px-4 pt-4 pb-10 rounded-md">
              <Image src={image.cream} className="pt-6 w-[76%] mb-5 mack ml-8" />

              <div className="flex flex-col gap-2">
                <Image src={image.heart} className="cursor-pointer w-5" />
                <Image src={image.eye} className="cursor-pointer w-5" />
              </div>
            </div>

            <button
              className="text-white abs font-medium bg-black py-3 add"
              onClick={() => {
                addToCart();
              }}
              id="but"
            >
              Add to cart
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold">Curology Product Set</p>
            <div className="flex gap-2">
              <p className="font-semibold text-[#DB4444]">$500</p>
              <div className="flex gap-2">
                <div>
                  <Image src={image.four_star} className="mt-[2px]" />
                </div>
                <p className="text-gray-400 font-semibold">(145)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 mx:px-4 mx:grid-cols-2 grid grid-cols-4 gap-4 mx-auto justify-center px-32">
        <div className="flex flex-col gap-4">

          <div className="flex flex-col">
            <div className="flex sam relative bg-[#F5F5F5] px-4 pt-4 pb-10 rounded-md">
              <Image
                src={image.benz}
                className="pt-6 w-[69%] mb-5 mack ml-8"
                id="benz"
              />

              <div className="flex flex-col gap-2 ml-4">
                <Image src={image.heart} className="cursor-pointer w-5" />
                <Image
                  src={image.eye}
                  className="cursor-pointer w-5"
                />
              </div>
            </div>
            <button
              className="text-white abs font-medium bg-black py-3 add"
              onClick={() => {
                addToCart();
              }}
              id="but"
            >
              Add to cart
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">Kids Electric Car (Under 15 years)</p>
            <div className="flex gap-2">
              <p className="font-semibold text-[#DB4444]">$960</p>
              <div className="flex gap-2">
                <div>
                  <Image src={image.five_star} className="mt-[2px]" />
                </div>
                <p className="text-gray-400 font-semibold">(65)</p>
              </div>
            </div>
            <div className="flex gap-2">
              <svg id="svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#FB1314" />
              </svg>
              <Image src={image.red} id="svo" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">

          <div className="flex flex-col">
            <div className="flex sam relative bg-[#F5F5F5] px-4 pt-4 pb-10 rounded-md">
              <Image src={image.shoe} className="pt-6 w-[74%] mb-5 mack ml-8" />

              <div className="flex flex-col gap-2 ml-1">
                <Image src={image.heart} className="cursor-pointer w-5" />
                <Image src={image.eye} className="cursor-pointer w-5" />
              </div>

            </div>

            <button
              className="text-white font-medium abs bg-black py-3 add"
              onClick={() => {
                addToCart();
              }}
              id="but"
            >
              Add to cart
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">Jr. Zoom Soccer Cleats</p>
            <div className="flex gap-2">
              <p className="font-semibold text-[#DB4444]">$1160</p>
              <div className="flex gap-2">
                <div>
                  <Image src={image.five_star} className="mt-[2px]" />
                </div>
                <p className="text-gray-400 font-semibold">(35)</p>
              </div>
            </div>
            <div className="flex gap-2">
              <svg id="svgg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#EEFF61" />
              </svg>
              <Image src={image.red} id="svoo" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <div className="flex sam relative bg-[#F5F5F5] px-4 pt-4 pb-10 rounded-md">
              <Image src={image.padd} className="pt-6 w-[90%] mb-5 mack ml-8 mx:ml-3" />

              <div className="flex flex-col gap-2">
                <Image src={image.heart} className="cursor-pointer" />
                <Image src={image.eye} className="cursor-pointer" />
              </div>

            </div>
            <button
              className="text-white font-medium bg-black abs py-3 add"
              onClick={() => {
                addToCart();
              }}
              id="but"
            >
              Add to cart
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">GP11 Shooter USB Gamepad</p>
            <div className="flex gap-2">
              <p className="font-semibold text-[#DB4444]">$660</p>
              <div className="flex gap-2">
                <div>
                  <Image src={image.half_star} className="mt-[2px]" />
                </div>
                <p className="text-gray-400 font-semibold">(55)</p>
              </div>
            </div>
            <div className="flex gap-2">
              <svg id="svggg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#222" />
              </svg>
              <Image src={image.red} id="svooo" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">

          <div className="flex flex-col">
            <div className="flex sam relative bg-[#F5F5F5] px-4 pt-4 pb-10 rounded-md">
              <Image src={image.jacket} className="pt-6 w-[67%] mb-5 mx:mb-9 mack ml-8" />

              <div className="flex flex-col gap-2 ml-6">
                <Image src={image.heart} className="cursor-pointer w-5" />
                <Image src={image.eye} className="cursor-pointer w-5" />
              </div>

            </div>
            <button
              className="text-white font-medium bg-black abs py-3 add"
              onClick={() => {
                addToCart();
              }}
              id="but"
            >
              Add to cart
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold">Stock Quilted Satin Jacket</p>
            <div className="flex gap-2">
              <p className="font-semibold text-[#DB4444]">$660</p>
              <div className="flex gap-2">
                <div>
                  <Image src={image.half_star} className="mt-[2px]" />
                </div>
                <p className="text-gray-400 font-semibold">(55)</p>
              </div>
            </div>
            <div className="flex gap-2">
              <svg id="svgggg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#222" />
              </svg>
              <Image src={image.red} id="svoooo" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-10 mb-10">
        <button className="bg-[#DB4444] text-white py-2 px-8 text-sm rounded-[4px] text-center">
          View All Products
        </button>
      </div>

      <div className="flex mx:mx-4 flex-col mx-32 gap-4">
        <p className="text-[#DB4444] rounded-md text-base font-semibold border-l-[12px] pl-3 mt-20 py-1 mb-4 border-l-[#DB4444]">
          Featured
        </p>

        <div className="flex justify-between -mt-6">
          <p className="text-3xl font-semibold mt-1">New Arrival</p>

          <div className="gap-2 hidden">
            <Image src={image.left} priority className="cursor-pointer" />
            <Image src={image.right} priority className="cursor-pointer" />
          </div>
        </div>
      </div>

      <NewArrival />

      <Qualifications />

      <div className="flex mx-20 items-end justify-end">
      <a href="#home">
        <Image src={image.top} />
      </a>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
