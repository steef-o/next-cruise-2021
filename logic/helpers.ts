import { Ship } from "../models/Ship";

export const getTodaysDate = (options: {}) => {
  return new Date().toLocaleDateString("nb-NO", options);
};
