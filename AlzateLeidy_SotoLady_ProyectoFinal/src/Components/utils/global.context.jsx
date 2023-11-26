import { createContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";  

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
    
  const[dentistList, setDentistList] = useState([])
  const [dentista, setDentista] = useState(null);
  const { id } = useParams();

  useEffect(() => {

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then (res => {
       setDentistList(res.data)
    })
    
  }, [])

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setDentista(res.data);
      });
  }, [id]);



  return (
    <ContextGlobal.Provider 
      value={{
        dentistList,
        dentista
      }}>
      {children}
    </ContextGlobal.Provider>
  );
};
