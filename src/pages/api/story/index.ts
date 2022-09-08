import type { NextApiRequest, NextApiResponse } from "next";
import {prisma} from "../../../server/db/client";

/**
 * Pobieranie całej historii
 */

const story = async (req: NextApiRequest, res: NextApiResponse) => {
  if(req.method === 'GET'){
    const story = await prisma.story.findMany()
    res.status(200).json(story);
  }
};

export default story;
