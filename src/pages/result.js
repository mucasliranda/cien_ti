import { Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import TopBar from "../components/TopBar"
import axios from "axios"
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import BarChart from "../components/BarChart"


export default function Result({data}){

  // console.log(data.result)

  // const catalogue = 

  // for (const i in data.result){
  //   console.log(i)
  // }
  

  return(
    <Stack alignItems="center" justifyContent="center" sx={{width: "100vw", height: "100vh"}} >
      
      <Typography variant="h3" textAlign="center" >Obrigado por colaborar com a nossa pesquisa!</Typography>

      <Typography variant="h2" mt="25px" >Confira os resultados!</Typography>

      {data && <BarChart dataChart={data.result.wifi} />}

    </Stack>
  )

}

export async function getStaticProps(){

  const res = await fetch("http://localhost:3000/api/chartData")
  const data = await res.json()


  return{
    props: { 
      data,
    }
  }

}