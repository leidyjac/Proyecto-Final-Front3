import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { manejadorTema } = useContext(ContextGlobal);

  return (
    <nav>
      <Link to="/"> Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favs</Link>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={manejadorTema} className="themeButton">
        <img src="images/moon-solid.png" alt="Moon" className="iconoBoton" />
      </button>
    </nav>
  );
};

export default Navbar;
