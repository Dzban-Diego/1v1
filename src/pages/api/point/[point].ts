import type { NextApiRequest, NextApiResponse } from "next";
import {prisma} from "../../../server/db/client";

const point = async (req: NextApiRequest, res: NextApiResponse) => {

  /**
   *  Potwierdzenie punktacji
   */
  if (req.method === 'PATCH') {
    const pointID = req.query["point"]

    if(!pointID || typeof pointID !== 'string'){
      res.statusCode = 404
      res.send('Wyślij id punktu')

      return
    }

    const updateUser = await prisma.story.update({
      where: {
        id: parseInt(pointID),
      },
      data: {
        confirmed: true,
      },
    })

    res.statusCode = 202
    res.send(updateUser)
  }
};

export default point;
