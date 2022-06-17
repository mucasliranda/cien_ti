import axios from "axios";
import { useEffect } from "react";


export const api = axios.create({
  baseURL: "https://cienti-datascience.vercel.app/"
})