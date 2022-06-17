import { Box, TextField, Autocomplete, Stack, Button } from '@mui/material'
import { Fade } from 'react-reveal'
import { useState } from 'react'
import { useForm } from '../../provider/Form'
import Router from 'next/router'
import Form from '../../components/Form'


export default function Id1(){

  // const [ value, setValue ] = useState()

  // const { respostas, setRespostas } = useForm()

  // const cores = [
  //   {label: "Azul", value: "blue"},
  //   {label: "Vermelho", value: "red"},
  //   {label: "Verde", value: "green"}
  // ]

  // const handleSubmit = (event) => {

  //   event.preventDefault()

  //   setRespostas(prevState => ({
  //     ...prevState,
  //     cor: value
  //  }));

  //  Router.push("/form/2")

  // }

  const pergunta = {
    id: 1, 
    label: "Qual sua cor favorita? ",
    tipo: "cor",
    opcoes: [
      {label: "Azul", value: "blue"},
      {label: "Vermelho", value: "red"},
      {label: "Verde", value: "green"}
    ],
    proximo: true
  }

  return(
    <>
      <Form pergunta={pergunta} />
    </>
  )

}