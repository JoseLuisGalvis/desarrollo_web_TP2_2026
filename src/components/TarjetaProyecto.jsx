const logos = {
  react: "/img/react_logo.webp",
  html: "/img/html_logo.webp",
};

export default function TarjetaProyecto({ id, nombre, tecnologia, enlace }) {
  const logo = logos[tecnologia.toLowerCase()];

  return (
    <article className="tarjeta proyecto">
      <div className="proyecto-cabecera">
        <p className="proyecto-num">N.º {String(id).padStart(2, "0")}</p>
        {logo && (
          <img
            className="logo-tec"
            src={logo}
            alt=""
            width="44"
            height="44"
            loading="lazy"
          />
        )}
      </div>
      <h3>{nombre}</h3>
      <span className="etiqueta-tec">{tecnologia}</span>
      <div>
        <a
          className="boton boton-sec"
          href={enlace}
          target="_blank"
          rel="noreferrer"
        >
          Ver proyecto
        </a>
      </div>
      <p className="proyecto-enlace">{new URL(enlace).hostname}</p>
    </article>
  );
}
