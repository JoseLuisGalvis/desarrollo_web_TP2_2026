import { useState } from "react";

export default function TarjetaFlip({ nombre, foto, datos }) {
  const [girada, setGirada] = useState(false);
  const [indice, setIndice] = useState(0);

  function alternar() {
    if (!girada) {
      setIndice(Math.floor(Math.random() * datos.length));
    }
    setGirada(!girada);
  }

  return (
    <button
      type="button"
      className={girada ? "flip girada" : "flip"}
      onClick={alternar}
      aria-pressed={girada}
      aria-label={`Tarjeta de ${nombre}: tocar para ${girada ? "volver" : "ver un dato curioso"}`}
    >
      <span className="flip-interior">
        <span className="flip-cara flip-frente">
          <img src={foto} alt={`Foto de ${nombre}`} />
          <strong>{nombre}</strong>
          <span className="flip-pista">Tocá para ver un dato curioso</span>
        </span>
        <span className="flip-cara flip-dorso">
          <span className="etiqueta">¿Sabías que…?</span>
          <span className="flip-dato">{datos[indice]}</span>
        </span>
      </span>
    </button>
  );
}
