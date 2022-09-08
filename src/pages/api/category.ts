import type { NextApiRequest, NextApiResponse } from "next";
import {prisma} from "../../server/db/client";

type NextApiRequestCategory = NextApiRequest & {
  name: (bar: string) => void,
  id?: number,
}

type categoryBody = {
  name: string,
}

const category = async (req: NextApiRequestCategory, res: NextApiResponse) => {
  /**
   * Tworzenie nowej kategorii
   */
  if (req.method === 'POST') {
    const body: categoryBody = JSON.parse(req.body);
    if(!body.name){
      res.statusCode = 422
      res.send("Podaj nazwę kategorii")
      return
    }

    const newStory = await prisma.category.create({
      data: {
        ...body,
      }
    })

    res.statusCode = 202
    res.send(newStory)
  }

  /**
   * Pobieranie kategorii
   */
  if(req.method === 'GET'){
    const categories = await prisma.category.findMany()
    res.statusCode = 200
    res.send(categories)
  }

  /**
   * Usuwanie kategorii
   */
  if(req.method === 'DELETE'){
    const categoryID = JSON.parse(req.body).id
    if(categoryID){
      const categories = await prisma.category.delete({
        where: {
          id: categoryID,
        },
      })
      res.statusCode = 202
      res.send(categories)
    }else{
      res.statusCode = 404
      res.send("Błąd usuwania")
    }
  }
};

export default category;
