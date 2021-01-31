import { ships } from "../../../assets/data";

export default function handler(req: any, res: any) {
  res.status(200).json(ships);
}
