import axios from "axios";


export const api = axios.create({
  baseURL: "https://cienti-datascience.vercel.app/"
})

// https://cienti-datascience.vercel.app/