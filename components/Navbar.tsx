"use client";

import React, { useState } from "react";
import HamburgerIcon from "./icons/HamburgerIcon";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleHamburgerMenu = () => {
    setIsOpen(!isOpen);
    !isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  };

  const hamburgerIcon = (
    <button onClick={toggleHamburgerMenu}>
      <HamburgerIcon isOpen={isOpen} />
    </button>
  );

  return (
    <div className="sticky z-10 bg-white top-0 left-0 border-b-2">
      <div className="flex justify-between p-5 px-10 border-b-2">
        {hamburgerIcon}
        <div
          className={`${
            !isOpen ? "hidden" : "fixed"
          } inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full`}
        >
          <div className="h-full max-w-screen-sm bg-white p-5 flex flex-col gap-8">
            {hamburgerIcon}
            <div className="flex flex-col gap-4 p-1">
              <Link href="/clothing" onClick={() => toggleHamburgerMenu()}>
                <h2 className="text-2xl">Clothing</h2>
              </Link>
              <Link href="/shoes" onClick={() => toggleHamburgerMenu()}>
                <h2 className="text-2xl">Shoes</h2>
              </Link>
              <Link href="/accessories" onClick={() => toggleHamburgerMenu()}>
                <h2 className="text-2xl">Accessories</h2>
              </Link>
            </div>
          </div>
        </div>
        <Link href="/">
          <h1 className="text-3xl">Style Haven</h1>
        </Link>
        <div></div>
      </div>
    </div>
  );
}
