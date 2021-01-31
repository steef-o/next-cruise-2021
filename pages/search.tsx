import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Ship } from "../models/Ship";
import { server } from "../config";
import Card from "../components/Card";
import Meta from "../components/Meta";

interface SearchProps {
  ships: Ship[];
}

const Search = ({ ships }: SearchProps) => {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<Ship[]>([]);

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
    const list: Ship[] = ships.filter((ship) =>
      ship.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(list);
  };

  return (
    <div className="pt-5 pb-3">
      <Meta title={"Søk etter Skip"} />
      <Navbar type={"search"} />
      <form className="mt-5">
        <label
          htmlFor="search"
          className="text-white block mx-auto w-full mb-2"
        >
          Søk etter skipsnavn
        </label>
        <input
          className="block mx-auto md:max-w-xl w-full rounded h-12 pl-4"
          type="text"
          id="search"
          placeholder="Eks: AIDASol"
          onChange={handleSearch}
        />
      </form>
      <div className="mt-20">
        {search &&
          searchResult.map((ship: Ship, index: number) => (
            <div className="mb-8" key={index}>
              <h2 className="text-white text-2xl ml-1 font-bold">
                {ship.date}
              </h2>
              <Card {...ship} />
            </div>
          ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/ships`);
  const ships: Ship[] = await res.json();

  return {
    props: {
      ships,
    },
  };
};

export default Search;
