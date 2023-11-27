import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  
   const {dentista, theme} = useContext(ContextGlobal)

  return (
    <>
      <div className= {`${theme}`}>
      <h1>Información del dentista</h1>
      <div>
      <br></br>
      <br></br>
        {dentista ? (
          <div className="table">
            <p>Nombre: {dentista.name}</p>
            <p>Email: {dentista.email}</p>
            <p>Telefono: {dentista.phone}</p>
            <p>Website: {dentista.website}</p>
          
          </div>
        ) : (
          <p>Cargando información del dentista...</p>
        )}
      </div>
      </div>
    </>
  );
};

export default Detail;
