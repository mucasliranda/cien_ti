import {  Stack, RadioGroup, Radio, FormControlLabel, FormControl, FormLabel, Slide, Typography, Grid } from '@mui/material'
import { useForm } from '../../provider/Form'
import { useRouter } from "next/router"
import { useEffect, useState, useReducer } from 'react'
import styled from '@mui/system'


export default function Form({pergunta}){

  const Router = useRouter()

  const [ value, setValue ] = useState("")

  const { respostas, submit } = useForm()

  const [ toFade, setToFade ] = useState(false)

  const { id, label, key, proximo } = pergunta

  function handleSubmit(event){
    setValue(event.target.value)
  }

  useEffect( () => {
    if(value !== ""){
      respostas[key] = value

      setTimeout( () => {
        if(proximo){
          Router.push(`/form/${id + 1}`)
          setValue("")
        }
        else{
          Router.push("/result")
          submit()
        }
      }, 1000)

      console.log(respostas)
    }
    setToFade(!toFade)
  },[value])

  return(
    <Stack component="form" onSubmit={handleSubmit} alignItems="center" justifyContent="center" sx={{width: "100vw", height: "100vh"}} >

      <Slide direction="down" in={toFade} mountOnEnter unmountOnExit>

        <Stack alignItems="center" sx={{textAlign: "center", width: "clamp(320px, 100%, 720px)"}} >

          <FormLabel>{label}</FormLabel>

          <FormControl>

            <RadioGroup
              value={value}
              onChange={handleSubmit}
            >

              <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1} >

                <Typography sx={{color: "error.main", display: { xs: 'none', sm: 'block' } }} >
                  Discordo completamente
                </Typography>

                <FormControlLabel 
                  control={<Radio value="-2" color="error" sx={{ color: "#ef5350 !important" ,'& .MuiSvgIcon-root': {fontSize: 40}}} />}
                />

                <FormControlLabel 
                  control={<Radio value="-1" color="error" sx={{ color: "#ef5350 !important" ,'& .MuiSvgIcon-root': {fontSize: 36}}} />}
                />

                <FormControlLabel 
                  control={<Radio value="0" sx={{color: "#9b9faa", '&.Mui-checked': {color: "rgba(0, 0, 0, 0.5)"},'& .MuiSvgIcon-root': {fontSize: 32}}} />}
                />

                <FormControlLabel 
                  control={<Radio value="1" color="success" sx={{ color: "#33a474 !important" ,'& .MuiSvgIcon-root': {fontSize: 36}}} />}
                />

                <FormControlLabel 
                  control={<Radio value="2" color="success" sx={{ color: "#33a474 !important" ,'& .MuiSvgIcon-root': {fontSize: 40}}} />}
                />

                <Typography sx={{color: "#33a474", display: { xs: 'none', sm: 'block' }}} >
                  Concordo completamente
                </Typography>

              </Stack>

              <Stack direction="row" justifyContent="space-between" sx={{width: "100%", display: { xs: 'flex', sm: 'none' }}} >

                <Typography sx={{color: "#ef5350", maxWidth: "180px"}} >
                  Discordo completamente
                </Typography>

                <Typography sx={{color: "#33a474", maxWidth: "180px"}} >
                  Concordo completamente
                </Typography>

              </Stack>

            </RadioGroup>

          </FormControl>

        </Stack>

      </Slide>

    </Stack>
  )

}