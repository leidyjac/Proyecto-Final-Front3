import Form from "../Components/Form";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const {theme} = useContext(ContextGlobal)

  return (
    <div className={`${theme}`}>
      <h3>Deseas tener mayor información</h3>
      <p>Dejanos tus datos para contactarte</p>
      <Form/>
    </div>
  );
};

export default Contact;
