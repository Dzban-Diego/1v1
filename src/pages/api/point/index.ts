import type { NextApiRequest, NextApiResponse } from "next";
import {prisma} from "../../../server/db/client";

type NextApiRequestPoint = NextApiRequest & {
  name: (bar: string) => void,
  forId: (bar: number) => void
  categoryID: (bar: number) => void
}

type storyBody = {
  name: string,
  forId: number,
  categoryID: number
  points: number,
  description?: string
}

/**
 * Tworzenie nowych punktów
 */

const index = async (req: NextApiRequestPoint, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const body: storyBody = JSON.parse(req.body);
    if(!body.points){
      res.statusCode = 422
      res.send("Podaj ilość punktów")
      return
    }
    if(!body.forId){
      res.statusCode = 422
      res.send("Pole forId jest wymagane")
      return
    }
    if(!body.categoryID){
      res.statusCode = 422
      res.send("Pole categoryID jest wymagane")
      return
    }

    const newStory = await prisma.story.create({
      data: {
        ...body,
        confirmed: false,
      }
    })

    res.statusCode = 202
    res.send(newStory)
  }
};

export default index;
