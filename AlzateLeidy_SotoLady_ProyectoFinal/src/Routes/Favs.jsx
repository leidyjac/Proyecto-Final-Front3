import React from "react";
import { useEffect, useState, useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const [datos, setDatos] = useState([])
  const {theme} = useContext(ContextGlobal)
  
  
  useEffect(() => {
    const datosStorage = localStorage.getItem('favoritos');
    const datosParseados = JSON.parse(datosStorage);

    setDatos(datosParseados || [])
    
  }, []);


  return (
    <>
    <div className= {`${theme}`}>
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        
          {datos.map((dentist)=>(
          <Card
          key={dentist.id}
          dentist={dentist}
          id = {dentist.id}
        />

          ))}
        
      </div>
      </div>
    </>
  );
};

export default Favs;
