import Form from "../Components/Form";
import { useContext, useEffect } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

const Contact = () => {
  const { theme, setTheme } = useContext(ContextGlobal);

  useEffect(() => {
    const temaGuardado = localStorage.getItem("tema");
    if (temaGuardado) {
      setTheme(temaGuardado);
    }
  }, []);

  return (
    <div className={`${theme}`}>
      <h3>Deseas tener mayor información</h3>
      <p>Dejanos tus datos para contactarte</p>
      <Form />
    </div>
  );
};

export default Contact;
