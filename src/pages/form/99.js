import { Box, TextField, Autocomplete, Stack, Button } from '@mui/material'
import { Fade } from 'react-reveal'
import { useState } from 'react'
import { useForm } from '../../provider/Form'
import Router from 'next/router'
import Form from '../../components/Form'


export default function Id2(){

  // const [ value, setValue ] = useState()

  // const { respostas, setRespostas } = useForm()

  // const cores = [
  //   {label: "Cachorro", value: "Cachorro"},
  //   {label: "Gato", value: "Gato"},
  // ]

  // const handleSubmit = (event) => {

  //   event.preventDefault()

  //   console.log(respostas)

  //   setRespostas(prevState => ({
  //     ...prevState,
  //     animal: value
  //  }));

  // }

  const pergunta = {
    id: 2, 
    label: "Qual seu animal favorito? ",
    tipo: "animal",
    opcoes: [
      {label: "Cachorro", value: "Cachorro"},
      {label: "Gato", value: "Gato"}
    ],
    proximo: false
  }



  return(
    <>
      <Form pergunta={pergunta} />
    </>
  )

}