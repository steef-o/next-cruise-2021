import React from "react";
import Link from "next/link";
import ArrowThickLeft from "../assets/icons/ArrowThickLeft";
import SearchIcon from "../assets/icons/SearchIcon";

interface NavbarProps {
  type: "home" | "search";
}

const Navbar = ({ type }: NavbarProps) => {
  return (
    <nav>
      {type === "home" ? (
        <div className="flex justify-center relative">
          <h1 className="mx-auto mt-2 text-2xl md:text-3xl text-white">
            Hvilken båt er det i dag?
          </h1>
          <Link href="/search">
            <a className="absolute right-0 top-0 p-4">
              <SearchIcon />
            </a>
          </Link>
        </div>
      ) : (
        <div className="flex justify-center relative">
          <Link href="/">
            <a className="absolute left-0 top-0 p-4">
              <ArrowThickLeft />
            </a>
          </Link>
          <h1 className="mx-auto mt-2 text-2xl md:text-3xl text-white">
            Søk etter skip
          </h1>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
