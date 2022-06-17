import { Box, TextField, Autocomplete, Stack, Button } from '@mui/material'
import { Fade } from 'react-reveal'



export default function Home() {

  const cursos = [
    {label: "Ciência da Computação"},
    {label: "Sistema da Informação"},
    {label: "Análise e Desenvolvimento de Sistemas"}
  ]

  return (
    <Stack alignItems="center" justifyContent="center" sx={{width: "100vw", height: "100vh"}} >

      <Fade top big >

        <Stack justifyContent="center" spacing={5} >

          <TextField label="Qual o seu nome?" />

          <Autocomplete options={cursos} sx={{width:"300px"}} renderInput={(params) => <TextField {...params} label="Qual o seu curso?" />} />

          <Button variant="contained" >enviar</Button>

        </Stack>

      </Fade>

    </Stack>
  )
}
