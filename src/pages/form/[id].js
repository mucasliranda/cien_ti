import { Box, TextField, Autocomplete, Stack, Button } from '@mui/material'
import { useForm } from '../../provider/Form'
import { useRouter } from "next/router"
import { Fade } from 'react-reveal'
import { useEffect, useState } from 'react'
import Form from '../../components/Form'


export default function Id(){

  const router = useRouter()

  const { id } = router.query

  const arrayPerguntas = [
    {
      id: 1, 
      label: "Gosto do modelo de aulas assincronas",
      key: "assinc",
      proximo: true
    },
    {
      id: 2, 
      label: "Acho que o uso de mascara deveria voltar a ser obrigatório no campus",
      key: "mascara",
      proximo: true
    },
    {
      id: 3, 
      label: "Gosto da qualidade do AVA",
      key: "ava",
      proximo: true
    },
    {
      id: 4, 
      label: "O wifi do campus atende as minhas necessidades",
      key: "wifi",
      proximo: true
    },
    {
      id: 5, 
      label: "Os computadores do NAT atendem as minhas necessidades",
      key: "pc",
      proximo: true
    },
    {
      id: 6, 
      label: "Gosto da metodologia de ensino dos professores",
      key: "profs",
      proximo: false
    },
  ]

  const pergunta = arrayPerguntas.find( (each) => {
    return each.id == id
  })

  return(
    <>
      {pergunta && <Form pergunta={pergunta} />}
    </>
  )

}