import React, { useState } from "react";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formatoDeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombre.length <= 4 && !formatoDeEmail.test(email)) {
      setMensaje(
        "El nombre de tener almenos 5 letras y el email debe cumplir con el formato de correo electronico"
      );
    } else if (nombre.length <= 4) {
      setMensaje("El nombre de tener almenos 5 letras");
    } else if (!formatoDeEmail.test(email)) {
      setMensaje("El email no cumple con el formato de un correo electrónico");
    } else {
      setMensaje(
        "Gracias " + nombre + ", te contactaremos cuanto antes vía mail"
      );
    }
  };

  return (
    <div>
      <h1>Ingresa tus datos</h1>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          placeholder="Ingrese su email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" value="Enviar datos" />
      </form>
      <br></br>
      <br></br>
      {mensaje && <div>{mensaje}</div>}
    </div>
  );
};

export default Form;
