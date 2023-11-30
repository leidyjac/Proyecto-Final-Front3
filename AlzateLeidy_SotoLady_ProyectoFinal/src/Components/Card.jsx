import React, { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import { dentistReducer } from "./utils/reducer";

const Card = ({ dentist, id }) => {
  const [favoritos, dispatchFavoritos] = useReducer(dentistReducer, []);

  const agregarFavoritos = () => {
    const existeEnFavoritos = favoritos.some(
      (favorito) => favorito.id === dentist.id
    );

    if (!existeEnFavoritos) {
      dispatchFavoritos({ type: "AGREGAR_A_FAVORITOS", payload: dentist });
      alert("Dentista agregado a favoritos exitosamente");
    } else {
      alert("El dentista ya ha sido agregado como favorito");
    }
  };
  useEffect(() => {
    const guardarFavoritos =
      JSON.parse(localStorage.getItem("favoritos")) || [];
    dispatchFavoritos({
      type: "INICIALIZAR_FAVORITOS",
      payload: guardarFavoritos,
    });
  }, []);

  return (
    <div className="card">
      <img src="../public/images/doctor.jpg" alt="Doctor" />
      <Link to={`/detail/${id}`}>{dentist.name}</Link>
      <p>{dentist.username}</p>
      <button onClick={agregarFavoritos} className="favButton">
        <img src="images/star-solid.png" alt="Estrella" className="favorito" />
      </button>
    </div>
  );
};

export default Card;
