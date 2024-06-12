"use client";

import React, { useState } from "react";
import HamburgerIcon from "./icons/HamburgerIcon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleHamburgerMenu = () => {
    setIsOpen(!isOpen);
  };

  const hamburgerIcon = (
    <button className="p-1" onClick={toggleHamburgerMenu}>
      <HamburgerIcon isOpen={isOpen} />
    </button>
  );

  return (
    <div className="sticky z-10 bg-white top-0 left-0 border-b-2">
      <div className="flex justify-between p-5 border-b-2">
        {hamburgerIcon}
        <h1 className="text-3xl">Style Haven</h1>
        <div></div>
      </div>
    </div>
  );
}
