import React from "react";

interface ShipsTodayProps {
  numberOfShips: number;
}

const ShipsToday = ({ numberOfShips }: ShipsTodayProps) => {
  return (
    <div className="w-full mx-auto text-center">
      <p className="text-white text-xl">
        Det er <strong>{numberOfShips === 0 ? "ingen" : numberOfShips}</strong>{" "}
        skip i dag
      </p>
    </div>
  );
};

export default ShipsToday;
