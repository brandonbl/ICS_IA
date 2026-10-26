
import { useState } from "react";
import { Contador } from "./Contador";
import { AvisoCookies } from "./AvisoCookies";
import "./App.css";

function App() {
  const [decision, setDecision] = useState("");

  function aceptarCookies() {
    console.log("Cookies aceptadas");
    setDecision("Has aceptado las cookies");
  }

  function rechazarCookies() {
    console.log("Cookies rechazadas");
    setDecision("Has rechazado las cookies");
  }

  return (
    <div>
      <Contador etiqueta="Asistentes" valorInicial={10} />
      <Contador etiqueta="Preguntas" valorInicial={5} />

      <hr />

      <AvisoCookies
        onAceptar={aceptarCookies}
        onRechazar={rechazarCookies}
      >
        Esta página utiliza cookies para mejorar tu experiencia.
      </AvisoCookies>

      {decision !== "" && <p>{decision}</p>}
    </div>
  );
}

export default App;
