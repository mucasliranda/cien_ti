import { createContext, useState, useContext, useEffect } from "react";
import { api } from "../../services/api";
import axios from "axios";

const FormContext = createContext();

export const FormProvider = ({ children }) => {

  const [ respostas, setRespostas ] = useState({})

  const submit = () => {
    axios.post("/api/db", respostas)
      .then( (res) => console.log(res))
      .catch( (err) => console.log(err))    
  }

  return (
    <FormContext.Provider value={{ respostas, setRespostas, submit }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);


// Bora fazer uma lista das perguntas

// -Cor favorita
// -Cachorro ou Gato
// -Dia ou Noite
// - modelo de carro
// - esporte preferido (só especificar qual, pode ser 2)
// - marcas no geral
// - bebida preferida
// - comida doce ou salgada
// - frio ou calor, montanha ou praia (lugar frio ou quente, pra viajar)
// -