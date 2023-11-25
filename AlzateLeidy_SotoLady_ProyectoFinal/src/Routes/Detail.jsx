import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentista, setDentista] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setDentista(res.data);
      });
  }, [id]);

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
