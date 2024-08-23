"use client";
import { useState, useEffect } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Image from "next/image";
import { image } from "../Components/Image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

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

  const shape = () => {
    let svo = document.getElementById("svo");
    svo.style.borderWidth = "2px";
    svo.style.borderColor = "black";
    svo.style.borderRadius = "9999px";
    svo.style.padding = "2px";
  }

  const shapee = () => {
    let svoo = document.getElementById("svoo");
    svoo.style.borderWidth = "2px";
    svoo.style.borderColor = "black";
    svoo.style.borderRadius = "9999px";
    svoo.style.padding = "2px";
  }

  const shapeee = () => {
    let svooo = document.getElementById("svooo");
    svooo.style.borderWidth = "2px";
    svooo.style.borderColor = "black";
    svooo.style.borderRadius = "9999px";
    svooo.style.padding = "2px";
  }

  const shapeeee = () => {
    let svoooo = document.getElementById("svoooo");
    svoooo.style.borderWidth = "2px";
    svoooo.style.borderColor = "black";
    svoooo.style.borderRadius = "9999px";
    svoooo.style.padding = "2px";
  }

  const border = () => {
    let svg = document.getElementById("svg");
    svg.style.borderWidth = "2px";
    svg.style.borderColor = "black";
    svg.style.borderRadius = "9999px";
    svg.style.padding = "2px";
  }

  const borderr = () => {
    let svgg = document.getElementById("svgg");
    svgg.style.borderWidth = "2px";
    svgg.style.borderColor = "black";
    svgg.style.borderRadius = "9999px";
    svgg.style.padding = "2px";
  }

  const borderrr = () => {
    let svggg = document.getElementById("svggg");
    svggg.style.borderWidth = "2px";
    svggg.style.borderColor = "black";
    svggg.style.borderRadius = "9999px";
    svggg.style.padding = "2px";
  }

  const borderrrr = () => {
    let svgggg = document.getElementById("svgggg");
    svgggg.style.borderWidth = "2px";
    svgggg.style.borderColor = "black";
    svgggg.style.borderRadius = "9999px";
    svgggg.style.padding = "2px";
  }

  const changePhone = () => {
    let phone = document.getElementById("phone");
    phone.style.color = "white";
    phone.style.background = "#DB4444";
    phone.style.border = "none";
  };
  const changeCamera = () => {
    let camera = document.getElementById("camera");
    camera.style.color = "white";
    camera.style.background = "#DB4444";
    camera.style.border = "none";
  };

  const changeComputer = () => {
    let computer = document.getElementById("computer");
    computer.style.color = "white";
    computer.style.background = "#DB4444";
    computer.style.border = "none";
  };

  const changeWatch = () => {
    let watch = document.getElementById("watch");
    watch.style.color = "white";
    watch.style.background = "#DB4444";
    watch.style.border = "none";
  };

  const changeHead = () => {
    let head = document.getElementById("head");
    head.style.color = "white";
    head.style.background = "#DB4444";
    head.style.border = "none";
  };

  const changeGaming = () => {
    let gaming = document.getElementById("gaming");
    gaming.style.color = "white";
    gaming.style.background = "#DB4444";
    gaming.style.border = "none";
  };

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

      <section className="flex px-32 justify-between pt-8 border-b-[1px] bg-white pb-3">
        <p className="text-2xl font-bold">Exclusive</p>

        <div className="flex gap-7 mt-1">
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

      <section className="flex px-32 justify-between">
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

        <div className="flex bg-[#000000] pl-24 mt-10 pt-14">
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

      <p className="text-[#DB4444] rounded-md text-base font-semibold border-l-[12px] pl-3 ml-32 mt-20 py-1 mb-4 border-l-[#DB4444]">
        Today&apos;s
      </p>

      <div className="flex px-32 justify-between">
        <div className="flex gap-16">
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

        <div className="flex gap-2">
          <Image src={image.left} priority className="cursor-pointer" />
          <Image src={image.right} priority className="cursor-pointer" />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-4 gap-4 mx-auto justify-center px-32">
        <div className="flex flex-col gap-4">
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
            <button
              className="absolute text-white abs font-medium bg-black top-[12.9rem] left-[1px] px-[92px] py-3 add"
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
            <button
              className="absolute text-white abs font-medium bg-black top-[12.9rem] left-[1px] px-[92.6px] py-3 add"
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
            <button
              className="absolute text-white abs font-medium bg-black top-[12.9rem] left-[1px] px-[92px] py-3 add"
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
            <button
              className="absolute text-white abs font-medium bg-black top-[12.9rem] left-[1px] px-[92px] py-3 add"
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

      <div className="flex flex-col gap-4 mb-20 pb-4 mx-32 border-t-[1px] border-b-[1px]">
        <p className="text-[#DB4444] rounded-md text-base font-semibold border-l-[12px] pl-3 mt-20 py-1 mb-4 border-l-[#DB4444]">
          Categories
        </p>

        <div className="flex justify-between -mt-6">
          <p className="text-3xl font-semibold mt-3">Browse By Category</p>

          <div className="flex gap-2">
            <Image src={image.left} priority className="cursor-pointer" />
            <Image src={image.right} priority className="cursor-pointer" />
          </div>
        </div>

        <div className="flex justify-between py-10">
          <div
            className="flex flex-col cursor-pointer gap-4 py-3 px-14 justify-center items-center border-[2px] rounded-md"
            id="phone"
            onClick={() => {
              changePhone();
            }}
          >
            <Image src={image.phone} />
            <p className="font-medium">Phones</p>
          </div>

          <div
            className="flex flex-col cursor-pointer gap-4 py-3 justify-center items-center px-8 border-[2px] rounded-md"
            id="computer"
            onClick={() => {
              changeComputer();
            }}
          >
            <Image src={image.computer} />
            <p className="font-medium">Computers</p>
          </div>

          <div
            className="flex flex-col cursor-pointer gap-4 py-3 justify-center items-center px-8 border-[2px] rounded-md"
            id="watch"
            onClick={() => {
              changeWatch();
            }}
          >
            <Image src={image.smartwatch} />
            <p className="font-medium">SmartWatch</p>
          </div>

          <div
            className="flex flex-col cursor-pointer gap-4 py-3 justify-center items-center px-12 border-[2px] rounded-md"
            id="camera"
            onClick={() => {
              changeCamera();
            }}
          >
            <Image src={image.camera} />
            <p className="font-medium">Camera</p>
          </div>

          <div
            className="flex flex-col cursor-pointer gap-4 py-3 justify-center items-center px-8 border-[2px] rounded-md"
            id="head"
            onClick={() => {
              changeHead();
            }}
          >
            <Image src={image.headphone} />
            <p className="font-medium">HeadPhones</p>
          </div>

          <div
            className="flex flex-col cursor-pointer gap-4 py-3 justify-center items-center px-12 border-[2px] rounded-md"
            id="gaming"
            onClick={() => {
              changeGaming();
            }}
          >
            <Image src={image.gaming} />
            <p className="font-medium">Gaming</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col mx-32 justify-between">
        <p className="text-[#DB4444] rounded-md text-base font-semibold border-l-[12px] pl-3 py-1 mb-4 border-l-[#DB4444]">
          This Month
        </p>
        <div className="flex justify-between">
          <p className="text-3xl font-semibold">Best Selling Products</p>
          <button className="bg-[#DB4444] text-white py-[10px] px-10 text-sm rounded-[4px] text-center">
            View All
          </button>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-4 gap-4 mx-auto justify-center px-32">
        <div className="flex flex-col gap-4">
          <div className="flex sam relative bg-[#F5F5F5] px-4 pt-4 pb-10 rounded-md">
            <Image src={image.cloth} className="pt-6 w-[77%] mack ml-8" />

            <div className="flex flex-col gap-2">
              <Image src={image.heart} className="cursor-pointer" />
              <Image src={image.eye} className="cursor-pointer" />
            </div>
            <button
              className="absolute text-white abs font-medium bg-black top-[12.5rem] left-[1px] px-[92px] py-3 add"
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
          <div className="flex sam relative bg-[#F5F5F5] px-4 pt-4 pb-10 rounded-md">
            <Image src={image.gucci} className="pt-6 w-[77%] mack ml-8" />

            <div className="flex flex-col gap-2">
              <Image src={image.heart} className="cursor-pointer" />
              <Image src={image.eye} className="cursor-pointer" />
            </div>
            <button
              className="absolute text-white abs font-medium bg-black top-[12.5rem] left-[1px] px-[92.2px] py-3 add"
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
          <div className="flex sam relative bg-[#F5F5F5] px-4 pt-4 pb-10 rounded-md">
            <Image src={image.speak} className="pt-6 w-[77%] mack ml-8" />

            <div className="flex flex-col gap-2">
              <Image src={image.heart} className="cursor-pointer" />
              <Image src={image.eye} className="cursor-pointer" />
            </div>
            <button
              className="absolute text-white abs font-medium bg-black top-[12.5rem] left-[1px] px-[92px] py-3 add"
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
          <div className="flex sam relative bg-[#F5F5F5] px-4 pt-4 pb-10 rounded-md">
            <Image src={image.bookshelf} className="pt-6 w-[77%] mack ml-8" />

            <div className="flex flex-col gap-2">
              <Image src={image.heart} className="cursor-pointer" />
              <Image src={image.eye} className="cursor-pointer" />
            </div>
            <button
              className="absolute text-white abs font-medium bg-black top-[12.5rem] left-[1px] px-[92px] py-3 add"
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

      <div className="flex mt-20 mb-10 rounded mx-32 sea justify-between p-8 bg-black">
        <div className="flex flex-col gap-10">
          <p className="text-base font-semibold text-[#00FF66]">Categories</p>
          <p className="text-5xl font-semibold leading-[3.4rem] text-white">
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

        <Image src={image.jbl} className="w-[60%] jbl" />
      </div>

      <div className="flex flex-col mx-32 gap-4">
        <p className="text-[#DB4444] rounded-md text-base font-semibold border-l-[12px] pl-3 mt-20 py-1 mb-4 border-l-[#DB4444]">
          Our Products
        </p>

        <div className="flex justify-between -mt-6">
          <p className="text-3xl font-semibold mt-3">Explore Our Products</p>

          <div className="flex gap-2">
            <Image src={image.left} priority className="cursor-pointer" />
            <Image src={image.right} priority className="cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-4 gap-4 mx-auto justify-center px-32">
        <div className="flex flex-col gap-4">
          <div className="flex sam relative bg-[#F5F5F5] px-4 pt-4 pb-10 rounded-md">
            <Image src={image.dog} className="pt-6 w-[74%] mb-5 mack ml-8" />

            <div className="flex flex-col gap-2">
              <Image src={image.heart} className="cursor-pointer w-5" />
              <Image src={image.eye} className="cursor-pointer w-5" />
            </div>
            <button
              className="absolute text-white abs font-medium bg-black top-[13.2rem] left-[1px] px-[92px] py-3 add"
              onClick={() => {
                addToCart();
              }}
              id="but"
            >
              Add to cart
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">Breed Dry Dog Food</p>
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
          <div className="flex sam relative bg-[#F5F5F5] px-4 pt-4 pb-10 rounded-md">
            <Image src={image.snap} className="pt-6 w-[74%] mb-5 mack ml-8" />

            <div className="flex flex-col gap-2">
              <Image src={image.heart} className="cursor-pointer w-5" />
              <Image src={image.eye} className="cursor-pointer w-5" />
            </div>
            <button
              className="absolute text-white abs font-medium bg-black top-[13.2rem] left-[1px] px-[92.2px] py-3 add"
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
          <div className="flex sam relative bg-[#F5F5F5] px-4 pt-4 pb-10 rounded-md">
            <Image src={image.laptop} className="pt-6 w-[74%] mb-5 mack ml-8" />

            <div className="flex flex-col gap-2">
              <Image src={image.heart} className="cursor-pointer w-5" />
              <Image src={image.eye} className="cursor-pointer w-5" />
            </div>
            <button
              className="absolute text-white abs font-medium bg-black top-[13.2rem] left-[1px] px-[92px] py-3 add"
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
          <div className="flex sam relative bg-[#F5F5F5] px-4 pt-4 pb-10 rounded-md">
            <Image src={image.cream} className="pt-6 w-[76%] mb-5 mack ml-8" />

            <div className="flex flex-col gap-2">
              <Image src={image.heart} className="cursor-pointer w-5" />
              <Image src={image.eye} className="cursor-pointer w-5" />
            </div>
            <button
              className="absolute text-white abs font-medium bg-black top-[13.3rem] left-[1px] px-[92px] py-3 add"
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

      <div className="mt-10 grid grid-cols-4 gap-4 mx-auto justify-center px-32">
        <div className="flex flex-col gap-4">
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
                onClick={() => {
                  let benz = document.getElementById("benz");
                  benz.style.visibility = "hidden";
                }}
              />
            </div>
            <button
              className="absolute text-white abs font-medium bg-black top-[12.5rem] left-[1px] px-[92px] py-3 add"
              onClick={() => {
                addToCart();
              }}
              id="but"
            >
              Add to cart
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">Kids Electric Car</p>
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
            <svg id="svg" onClick={() => {
               border();
            }} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="10" r="10" fill="#FB1314"/>
</svg>
            <Image src={image.red} id="svo" onClick={() => {
              shape();
            }}/>
          </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex sam relative bg-[#F5F5F5] px-4 pt-4 pb-10 rounded-md">
            <Image src={image.shoe} className="pt-6 w-[74%] mb-5 mack ml-8" />

            <div className="flex flex-col gap-2 ml-1">
              <Image src={image.heart} className="cursor-pointer w-5" />
              <Image src={image.eye} className="cursor-pointer w-5" />
            </div>
            <button
              className="absolute text-white font-medium abs bg-black top-[12.5rem] left-[1px] px-[92.2px] py-3 add"
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
            <svg id="svgg" onClick={() => {
               borderr();
            }} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="10" r="10" fill="#EEFF61"/>
</svg>
            <Image src={image.red} id="svoo" onClick={() => {
              shapee();
            }}/>
          </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex sam relative bg-[#F5F5F5] px-4 pt-4 pb-10 rounded-md">
            <Image src={image.padd} className="pt-6 w-[90%] mb-5 mack ml-8" />

            <div className="flex flex-col gap-2">
              <Image src={image.heart} className="cursor-pointer" />
              <Image src={image.eye} className="cursor-pointer" />
            </div>
            <button
              className="absolute text-white font-medium abs bg-black top-[12.6rem] abs left-[1px] px-[92px] py-3 add"
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
            <svg id="svggg" onClick={() => {
               borderrr();
            }} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="10" r="10" fill="#222"/>
</svg>
            <Image src={image.red} id="svooo" onClick={() => {
              shapeee();
            }}/>
          </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex sam relative bg-[#F5F5F5] px-4 pt-4 pb-10 rounded-md">
            <Image src={image.jacket} className="pt-6 w-[67%] mb-5 mack ml-8" />

            <div className="flex flex-col gap-2 ml-6">
              <Image src={image.heart} className="cursor-pointer w-5" />
              <Image src={image.eye} className="cursor-pointer w-5" />
            </div>
            <button
              className="absolute text-white font-medium bg-black top-[12.5rem] abs left-[1px] px-[92px] py-3 add"
              onClick={() => {
                addToCart();
              }}
              id="but"
            >
              Add to cart
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">Quilted Satin Jacket</p>
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
            <svg id="svgggg" width="20" onClick={() => {
              borderrrr();
            }} height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="10" r="10" fill="#222"/>
</svg>
            <Image src={image.red} id="svoooo" onClick={() => {
              shapeeee();
            }}/>
          </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-10 mb-10">
        <button className="bg-[#DB4444] text-white py-2 px-8 text-sm rounded-[4px] text-center">
          View All Products
        </button>
      </div>

      <div className="flex flex-col mx-32 gap-4">
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

      <div className="flex justify-between mx-32 mt-20 mb-20">
        <div className="bg-[#0D0D0D] relative owe px-6 pt-20 rounded-md">
          <div className="flex flex-col gap-3 shas z-[1]">
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
          <Image src={image.ps5} className="pss" />
        </div>

        <div className="flex flex-col gap-5">
          <div className="bg-[#0D0D0D] relative pl-20 pr-1 dash rounded-md">
            <Image src={image.woman} className="pss" />
            <div className="flex flex-col gap-3 z-[1] index">
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
              <div className="flex flex-col gap-2 z-[1] indexes">
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
              <div className="flex flex-col gap-2 z-[1] indexes">
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

      <div className="flex mx-60 justify-between my-10">
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

      <a href="#home" className="flex mx-20 items-end justify-end">
        <Image src={image.top} />
      </a>

      <Footer />
    </div>
  );
};

export default Home;
