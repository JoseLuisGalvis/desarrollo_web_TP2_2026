import { useState } from "react";
import arbol from "../data/arbol.json";
import NodoArbol from "../components/NodoArbol.jsx";

export default function Arbol() {
  const [abierto, setAbierto] = useState(true);
  const [version, setVersion] = useState(0);

  function cambiar(valor) {
    setAbierto(valor);
    setVersion((v) => v + 1);
  }

  return (
    <section>
      <p className="etiqueta">Estructura de la aplicación</p>
      <h1>Árbol de renderizado</h1>
      <p>
        Jerarquía de componentes de esta aplicación, desde el punto de entrada
        hasta las tarjetas. Cada nodo indica el archivo en el que vive y lo que
        hace. Tocá un nodo para expandirlo o contraerlo.
      </p>

      <div className="acciones">
        <button
          type="button"
          className="boton boton-sec"
          onClick={() => cambiar(true)}
        >
          Expandir todo
        </button>
        <button
          type="button"
          className="boton boton-sec"
          onClick={() => cambiar(false)}
        >
          Contraer todo
        </button>
      </div>

      <ul className="arbol-lista arbol-raiz" key={version}>
        <NodoArbol nodo={arbol} abierto={abierto} />
      </ul>
    </section>
  );
}
