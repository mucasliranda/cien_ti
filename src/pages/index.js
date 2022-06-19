import { Box, TextField, Autocomplete, Stack, Button, Typography, CardMedia } from '@mui/material'
import { Fade } from 'react-reveal'


export default function Home() {

  const cursos = [
    {label: "Ciência da Computação"},
    {label: "Sistema da Informação"},
    {label: "Análise e Desenvolvimento de Sistemas"}
  ]

  return (
    <Stack alignItems="center" justifyContent="center" sx={{width: "100vw", height: "100vh"}} >

      {/* <CardMedia
        component="img"
        image="/_next/static/media/LogoMostraCinzaEscuroFT.db3c0c65.png"
        sx={{ width: "clamp(0px, 75%, 350px)"}}
      /> */}

      <Typography variant="h2" >Pesquisa</Typography>

      <Typography variant="h1" >CienTI</Typography>

      <Typography>Demora menos de 3 minutos</Typography>

    </Stack>
  )
}
