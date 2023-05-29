"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CloseIcon,
  Github,
  GMail,
  HamburgerIcon,
  LinkedIn,
  User,
} from "../public/assets/icons";

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [shadow, setShadow] = useState(false);
  const toggleNavDrawer = () => {
    setShowDrawer(!showDrawer);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] p-2"
          : "fixed w-full h-20 z-[100] p-"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/#body">
          <Image
            src="/../public/assets/mk_logo.png"
            alt="logo"
            width="70"
            height="70"
          />
        </Link>

        <div>
          <ul className="hidden md:flex">
            <Link href="/#body">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div
            className="cursor-pointer md:hidden px-4"
            onClick={() => toggleNavDrawer()}
          >
            <HamburgerIcon />
          </div>
        </div>
      </div>
      <div
        className={
          showDrawer
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        <div
          className={
            showDrawer
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 "
              : "fixed left-[-100%] top-0 p-10 "
          }
        >
          <div>
            <div className="flex w-full justify-between">
              <Image
                src="/../public/assets/mk_logo.png"
                alt="logo"
                width="50"
                height="50"
              />
              <div
                onClick={() => toggleNavDrawer()}
                className="self-center rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer"
              >
                <CloseIcon />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">Frontend Developer</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-24">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let{"'"}s Connect
              </p>
              <div className="flex items-center justify-between my-4 sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ">
                  <LinkedIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ">
                  <Github />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ">
                  <GMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ">
                  <User />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
