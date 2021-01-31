import Head from "next/head";
import Card from "../components/Card";
import DateSelector from "../components/DateSelector";
import ShipsToday from "../components/ShipsToday";
import { server } from "../config";
import { getTodaysDate } from "../logic/helpers";
import { Ship } from "../models/Ship";
import Navbar from "../components/Navbar";

interface HomeProps {
  shipsToday: Ship[];
  ships: Ship[];
}

export default function Home({ ships, shipsToday }: HomeProps) {
  console.log(shipsToday);
  console.log(ships);

  return (
    <>
      <div className="pt-5 pb-3">
        <Navbar type={"home"} />
        <DateSelector />
        <div
          className="mx-auto w-full text-center h-40"
          style={{ lineHeight: "10rem" }}
        >
          animation placeholder
        </div>
        <ShipsToday numberOfShips={shipsToday.length} />
      </div>
      {shipsToday?.map((ship: Ship, index: number) => (
        <Card {...ship} key={index} />
      ))}
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/ships`);
  const ships: Ship[] = await res.json();

  const shipsToday = ships.filter(
    (ship: Ship) =>
      ship.date ===
      getTodaysDate({ month: "2-digit", day: "2-digit", year: "numeric" })
  );

  return {
    props: {
      ships,
      shipsToday,
    },
  };
};
