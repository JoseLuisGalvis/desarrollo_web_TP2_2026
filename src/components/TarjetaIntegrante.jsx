import { Link } from "react-router";

export default function TarjetaIntegrante({
  nombre,
  rol,
  foto,
  github,
  portafolio,
}) {
  return (
    <article className="tarjeta integrante">
      <img
        className="integrante-foto"
        src={foto}
        alt={`Foto de perfil de ${nombre}`}
        width="140"
        height="140"
      />
      <div>
        <h3>{nombre}</h3>
        <p className="integrante-rol">{rol}</p>
        <div className="acciones">
          <Link className="boton" to="/perfil">
            Ver perfil
          </Link>
          <a
            className="boton boton-sec"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          {portafolio && (
            <a
              className="boton boton-sec"
              href={portafolio}
              target="_blank"
              rel="noreferrer"
            >
              Portafolio
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
