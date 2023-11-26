import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  
   const {dentista} = useContext(ContextGlobal)

  return (
    <>
      <h1>Información del dentista</h1>
      <div>
        {dentista ? (
          <>
            <p>Nombre: {dentista.name}</p>
            <p>Email: {dentista.email}</p>
            <p>Telefono: {dentista.phone}</p>
            <p>Website: {dentista.website}</p>
          </>
        ) : (
          <p>Cargando información del dentista...</p>
        )}
      </div>
    </>
  );
};

export default Detail;
