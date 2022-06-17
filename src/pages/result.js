import { Stack, Typography } from "@mui/material"
import { useEffect } from "react"
import TopBar from "../components/TopBar"


export default function Result(){

  return(
    <Stack alignItems="center" justifyContent="center" sx={{width: "100vw", height: "100vh", position: "relative"}} >
      <TopBar />
      <h1>resultt</h1>
      <Typography variant="h3" >Muito obrigado por colaborar com a nossa pesquisa!</Typography>
      <Typography variant="h3" >Confira os resultados!</Typography>
    </Stack>
  )

}