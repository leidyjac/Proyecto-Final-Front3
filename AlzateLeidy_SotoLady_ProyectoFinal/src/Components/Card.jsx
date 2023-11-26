import React,{useReducer, useEffect} from "react";
import { Link } from "react-router-dom";

const dentistReducer = (state, action) => {
  switch (action.type){
    case 'INICIALIZAR_FAVORITOS':
      return action.payload
    case 'AGREGAR_A_FAVORITOS':
      const actualizarFavoritos = [...state, action.payload];
      localStorage.setItem('favoritos', JSON.stringify(actualizarFavoritos))
      return actualizarFavoritos
    default:
      return state
  }
}

const Card = ({dentist, id}) => {
  
  const [favoritos, dispatchFavoritos] = useReducer(dentistReducer, [])

  const agregarFavoritos = ()=> {
     dispatchFavoritos ({type: 'AGREGAR_A_FAVORITOS', payload: dentist})
     alert("Dentista agregado a favoritos exitosamente")

}
  useEffect(() => {

    const guardarFavoritos = JSON.parse(localStorage.getItem('favoritos')) || []
    dispatchFavoritos({ type: 'INICIALIZAR_FAVORITOS', payload: guardarFavoritos })
 
  }, [])
  
  return (
    <div className="card">
         <img src="../public/images/doctor.jpg" alt="Doctor" />
        <Link to={`/detail/${id}`}>{dentist.name}</Link>
        <p>{dentist.username}</p>
        <button onClick={agregarFavoritos} className="favButton"><img src="images/star-solid.png" alt="Estrella" className= "favorito"/></button>
    </div>
  );
};

export default Card;
