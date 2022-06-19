import { connectToDatabase } from "../../utils/mongodb"


export default async function handler(req, res) {

  const { query, method, body } = req

  if(method === "GET"){
    const { db } = await connectToDatabase()
    const data = await db.collection("answers").find().toArray()

    const result = {
      assinc : [
        {
          index: "-2",
          key: 0
        },
        {
          index: "-1",
          key: 0
        },
        {
          index: "0",
          key: 0
        },
        {
          index: "1",
          key: 0
        },
        {
          index: "2",
          key: 0
        },
      ],
      mascara : [
        {
          index: "-2",
          key: 0
        },
        {
          index: "-1",
          key: 0
        },
        {
          index: "0",
          key: 0
        },
        {
          index: "1",
          key: 0
        },
        {
          index: "2",
          key: 0
        },
      ],
      ava : [
        {
          index: "-2",
          key: 0
        },
        {
          index: "-1",
          key: 0
        },
        {
          index: "0",
          key: 0
        },
        {
          index: "1",
          key: 0
        },
        {
          index: "2",
          key: 0
        },
      ],
      wifi : [
        {
          index: "-2",
          key: 0,
          show: "🡣🡣🡣",
          color: "#ef5350"
        },
        {
          index: "-1",
          key: 0,
          show: "🡣🡣",
          color: "#ef5350bb"
        },
        {
          index: "0",
          key: 0,
          show: "0",
          color: "#cccccc"
        },
        {
          index: "1",
          key: 0,
          show: "🡡🡡",
          color: "#33a474bb"
        },
        {
          index: "2",
          key: 0,
          show: "🡡🡡🡡",
          color: "#33a474"
        },
      ],
    }

    data.forEach( (each) => {
      for (const [key, value] of Object.entries(each)) {
        if(key !== "_id"){
          if(value === "-2"){
            result[key][0].key += 1
          }
          else if(value === "-1"){
            result[key][1].key += 1
          }
          else if(value === "0"){
            result[key][2].key += 1
          }
          else if(value === "1"){
            result[key][3].key += 1
          }
          else if(value === "2"){
            result[key][4].key += 1
          }
        }
      }
    })

    const response = {
      data: data,
      result: result
    }

    res.status(200).json(response)
  }

}