import { createSuperContext } from "react-super-context";
import { server } from "../config";
import { Ship } from "../models/Ship";
import { getTodaysDate } from "../logic/helpers";

const [searchContext, useSearch] = createSuperContext(() => {
  const getStaticProps = async () => {
    const res = await fetch(`${server}/api/ships`);
    const ships: Ship[] = await res.json();

    return {
      props: {
        ships,
      },
    };
  };
});
