import type { NextApiRequest, NextApiResponse } from "next";
import {prisma} from "../../server/db/client";

/**
 * Pobieranie punktów
 */
const points = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query
  /**
   * Pokazuje nieaktywne punkty
   */
  const showInactive = typeof query.inactive === 'string' && parseInt(query.inactive) === 1

  let users
  if(showInactive){
    users = await prisma.user.findMany({
      select: {
        name: true,
        id: true,
        storyGained: {
          select: {
            points: true,
          },
        },
      },
    })
  }else {
    users = await prisma.user.findMany({
      select: {
        name: true,
        id: true,
        storyGained: {
          where: {
            confirmed: true,
          },
          select: {
            points: true,
          },
        },
      },
    })
  }

  const summedUsers = users.map(user => {
    let points = 0

    user.storyGained.forEach(point => {
      points += point.points
    })

    return {
      name: user.name,
      id: user.id,
      points
    }
  })

  res.status(200).json(summedUsers);
};

export default points;
