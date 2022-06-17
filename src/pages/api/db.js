// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectToDatabase } from "../../utils/mongodb"


export default async function handler(req, res) {

  const { query, method, body } = req

  if(method === "GET"){
    const { db } = await connectToDatabase()
    const data = await db.collection("answers").find().toArray()

    res.status(200).json(data)
  }
  else if(method === "POST"){
    const { db, client } = await connectToDatabase()
    const data = await db.collection("answers").find().toArray()

    db.collection("answers").insert(body)

    res.status(201).json(body)
  }

}
