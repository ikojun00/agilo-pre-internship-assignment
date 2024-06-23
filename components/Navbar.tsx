"use client";

import React, { useEffect, useState } from "react";
import HamburgerIcon from "./icons/HamburgerIcon";
import Link from "next/link";
import Cart from "./icons/Cart";
import Logo from "./icons/Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cartLength, setCartLength] = useState<number>(0);

  useEffect(() => {
    const handleStorage = () => {
      const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartLength(existingCart.length);
    };

    handleStorage();

    window.addEventListener("cart", handleStorage);
    return () => window.removeEventListener("cart", handleStorage);
  }, []);

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
      <div className="flex justify-between items-center p-2 px-10">
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
          <div className="flex justify-center gap-4">
            <div>
              <Logo />
            </div>
            <div className="hidden md:flex">
              <h1 className="text-2xl">Style Utopia</h1>
            </div>
          </div>
        </Link>

        <Link href="/cart">
          <div className="p-3.5 relative">
            <Cart />
            <div className="absolute top-0 left-0 rounded-2xl text-sm px-1 bg-slate-200">
              {cartLength}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
