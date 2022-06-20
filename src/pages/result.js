import { Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import TopBar from "../components/TopBar"
import axios from "axios"
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import BarChart from "../components/BarChart"


export default function Result(){

  // console.log(data.date)

  return(
    <Stack alignItems="center" justifyContent="center" sx={{width: "100vw", minHeight: "100vh", position: "relative", backgroundColor: "background.paper"}} >

      {/* <Stack sx={{width: "100vw"}} >

        <ArrowBackIcon />

        <ArrowForwardIcon />

      </Stack> */}

      {/* <Typography>{data.date}</Typography> */}
      
      <Typography variant="h3" textAlign="center" >Obrigado por colaborar com a nossa pesquisa!</Typography>

      <Typography variant="h2" mt="25px" >Confira os resultados!</Typography>

      {/* <Typography variant="h3" mt="35px" mb="-15px" textAlign="center" >{data.result.assinc.label}</Typography>

      {data && <BarChart dataChart={data.result.assinc.data} />}

      <Typography variant="h3" mt="35px" mb="-15px" textAlign="center" >{data.result.mascara.label}</Typography>

      {data && <BarChart dataChart={data.result.mascara.data} />}

      <Typography variant="h3" mt="35px" mb="-15px" textAlign="center" >{data.result.ava.label}</Typography>

      {data && <BarChart dataChart={data.result.ava.data} />}

      <Typography variant="h3" mt="35px" mb="-15px" textAlign="center" >{data.result.wifi.label}</Typography>

      {data && <BarChart dataChart={data.result.wifi.data} />} */}

    </Stack>
  )

}

// export async function getStaticProps(){

//   const res = await fetch("http://localhost:3000/api/chartData")
//   const data = await res.json()

//   const date = new Date()

//   return{
//     props: { 
//       data,
//     },
//     revalidate: 30
//   }

// }