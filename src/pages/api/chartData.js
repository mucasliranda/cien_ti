import { connectToDatabase } from "../../utils/mongodb"


export default async function handler(req, res) {

  const { query, method, body } = req

  if(method === "GET"){
    const { db } = await connectToDatabase()
    const data = await db.collection("answers").find().toArray()

    const date = new Date().getSeconds()

    const result = {
      assinc : {
        label: "Gosto do modelo de aulas assincronas",
        data: [
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
      },
      mascara : {
        label: "Acho que o uso de mascara deveria voltar a ser obrigatório no campus",
        data: [
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
      },
      ava : {
        label: "Gosto da qualidade do AVA",
        data: [
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
      },
      wifi : {
        label: "O wifi do campus atende as minhas necessidades",
        data: [
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
      },
      pc: {
        label: "Os computadores do NAT atendem as minhas necessidades",
        data: [
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
      },
      profs: {
        label: "Gosto da metodologia de ensino dos professores",
        data: [
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
    }

    data.forEach( (each) => {
      for (const [key, value] of Object.entries(each)) {
        if(key !== "_id"){
          if(value === "-2"){
            result[key].data[0].key += 1
          }
          else if(value === "-1"){
            result[key].data[1].key += 1
          }
          else if(value === "0"){
            result[key].data[2].key += 1
          }
          else if(value === "1"){
            result[key].data[3].key += 1
          }
          else if(value === "2"){
            result[key].data[4].key += 1
          }
        }
      }
    })

    const response = {
      data: data,
      result: result,
      date: date
    }

    res.status(200).json(response)
  }

}