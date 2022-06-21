import { Stack, Typography } from '@mui/material'
import Button from "@mui/material/Button"
import Link from 'next/link'


export default function Home() {

  return (
    <Stack alignItems="center" justifyContent="center" spacing={5} sx={{width: "100vw", height: "100vh", backgroundColor: "background.paper"}} >

      <Typography variant="h3" >Mostra de TI</Typography>

      <Typography variant="h2" >Ciência de dados</Typography>

      <Link href="/form/1" >
        <Button variant="contained" sx={{fontFamily: "Roboto", fontSize: "18px", padding: "8px 28px"}} >INICIAR</Button>
      </Link>

    </Stack>
  )
}
