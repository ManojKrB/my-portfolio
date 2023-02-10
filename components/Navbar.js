import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed w-full h-25 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/../public/assets/mk_logo.png"
          alt="logo"
          width="120"
          height="80"
        />
      </div>
    </div>
  );
};

export default Navbar;
