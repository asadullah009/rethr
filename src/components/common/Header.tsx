"use client";
import React, { useState } from "react";

// **Import Custom Buttons **
import NavLink from "../shared/button/NavLink";
import Icons from "../shared/Icons/Icons";
import Image from "next/image";

const Header = () => {
  // State
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/mission", text: "Missions" },
    { href: "/product", text: "Products" },
    { href: "/news", text: "News" },
    { href: "/partner", text: "Partners" },
    { href: "/aboutus", text: "About Us" },
  ];

  const openSideBar = () => {
    setOpen(!open);
  };

  return (
    <main className="w-screen bg-transparent relative flex justify-center">
      {/* Laptop view */}
      <nav className="hidden lg:flex px-16 justify-center z-20 items-center h-20 w-full select-none bg-transparent absolute top-0">
        <div className="flex w-full justify-between p-2">
          <div className="flex w-full justify-start gap-6 p-2">
            <Image
              src="./assets/icons/logo.svg"
              width={200}
              height={47}
              alt="logo"
            />
            <div className="flex items-center mr-5 space-x-5">
              {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  href={link.href}
                  text={link.text}
                  variant="outline"
                />
              ))}
            </div>
          </div>
          <button className="w-11 h-11 bg-background-primary flex justify-center items-center rounded-full">
            <Image
              src="./assets/icons/search.svg"
              width={12}
              height={12}
              alt="logo"
            />
          </button>
        </div>
      </nav>
      {/*  Mobile view */}
      <div className="flex justify-center items-center w-full">
        <div className="flex w-full lg:hidden justify-start items-center p-2 gap-2 z-30  ">
          <button onClick={openSideBar}>
            {open ? (
              <svg>
                <g id="Cross">
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z"
                    fill="#000000"
                  />
                </g>
              </svg>
            ) : (
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="HandBurger">
                  <path
                    d="M4 18L20 18"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M4 12L20 12"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M4 6L20 6"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </g>
              </svg>
            )}
          </button>
          {!open && (
            <Image
              src="./assets/icons/logo.svg"
              width={100}
              height={20}
              alt="logo"
            />
          )}
        </div>
        <div
          className={`space-y-1 py-3 px-2 xs:px-3.5 sm:px-4 pt-2 fixed xmd:hidden z-20 top-10 left-0 h-screen transition-all ease-in-out duration-500  w-full flex justify-start flex-col  
          ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex flex-col py-6 px-2 xs:px-3.5 sm:px-4 items-start justify-start bg-background-primary rounded-md w-[300px] h-screen border ">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                href={link.href}
                text={link.text}
                variant="outline"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
