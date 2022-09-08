// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";

const ping = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json("pong");
};

export default ping;
