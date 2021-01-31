import React from "react";
import { Ship } from "../models/Ship";

const Card = ({
  day,
  date,
  arrival,
  departure,
  name,
  passengers,
  nationality,
}: Ship) => {
  return (
    <div className="bg-oceanBlueLight rounded mx-auto my-2 p-5">
      <h2 className="text-white text-2xl font-bold mb-3">{name}</h2>
      {/*todo add icon*/}
      <div className="flex justify-between">
        <h3 className="text-white text-lg">Ankomst: {arrival}</h3>
        <h3 className="text-white text-lg">Passasjerer: {passengers}</h3>
      </div>
      <div className="flex justify-between">
        <h3 className="text-white text-lg">Avgang: {departure}</h3>
        <h3 className="text-white text-lg">Nasjonalitet: {nationality}</h3>
      </div>
    </div>
  );
};

export default Card;
