export const dentistReducer = (state, action) => {
  switch (action.type) {
    case "INICIALIZAR_FAVORITOS":
      return action.payload;
    case "AGREGAR_A_FAVORITOS":
      const actualizarFavoritos = [...state, action.payload];
      localStorage.setItem("favoritos", JSON.stringify(actualizarFavoritos));
      return actualizarFavoritos;
    default:
      return state;
  }
};
