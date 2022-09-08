import type { NextApiRequest, NextApiResponse } from "next";
import {prisma} from "../../../server/db/client";

/**
 * Usuwanie historii i punktów
 */

const story = async (req: NextApiRequest, res: NextApiResponse) => {
   if(req.method === 'DELETE'){
    const storyID = req.query["story"]

    if(!storyID || typeof storyID !== 'string'){
      res.statusCode = 404
      res.send('Błąd usuwania')

      return
    }

    if(storyID){
      const deletedStory = await prisma.story.delete({
        where: {
          id: parseInt(storyID)
        }
      }).catch(() => {
        res.statusCode = 404
        res.send('Błąd usuwania')
      })

      res.statusCode = 202
      res.send(deletedStory)
    }
  }

};

export default story;
