import React from "react";
import { useEffect, useState } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const [datos, setDatos] = useState([])
  
  
  useEffect(() => {
    const datosStorage = localStorage.getItem('favoritos');
    const datosParseados = JSON.parse(datosStorage);

    setDatos(datosParseados || [])
    
  }, []);


  return (
    <>
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
    </>
  );
};

export default Favs;
