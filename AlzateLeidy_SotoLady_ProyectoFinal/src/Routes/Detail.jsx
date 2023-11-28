import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";


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
