import { createContext, useEffect } from "react";
import axios from "axios";
import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";  

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
    
  const[dentistList, setDentistList] = useState([])
  const [dentista, setDentista] = useState(null);
  const [theme, setTheme] = useState('light')
  const { id } = useParams();

  useEffect(() => {

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then (res => {
       setDentistList(res.data)
    })
    
  }, [])

  useEffect(() => {
    if (id) { 
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          setDentista(res.data);
        })
        .catch((error) => {
          alert(`Error al obtener datos del dentista con ID ${id}`, error);
        });
    }
  }, [id]);

      const manejadorTema = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
      console.log("nuevo tema: "+ theme)
   };

   /*const providerValue = useMemo(() => {
    console.log('Valor del tema en el proveedor:', theme);
    return { theme, manejadorTema };
  }, [theme, manejadorTema]);*/
        
  

  return (
    <ContextGlobal.Provider 
      value={{
        dentistList,
        dentista,
        manejadorTema,
        theme
      }}>
      {children}
    </ContextGlobal.Provider>
  );
};
