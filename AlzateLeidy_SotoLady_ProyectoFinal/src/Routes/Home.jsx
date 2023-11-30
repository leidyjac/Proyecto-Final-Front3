import React from "react";
import Card from "../Components/Card";
import { useContext, useEffect } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Home = () => {
  const { dentistList, theme, setTheme } = useContext(ContextGlobal);

  useEffect(() => {
    const temaGuardado = localStorage.getItem("tema");
    if (temaGuardado) {
      setTheme(temaGuardado);
    }
  }, []);

  return (
    <main className={`${theme}`}>
      <h1>Home</h1>
      <div className="card-grid">
        {dentistList.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} id={dentist.id} />
        ))}
      </div>
    </main>
  );
};

export default Home;
