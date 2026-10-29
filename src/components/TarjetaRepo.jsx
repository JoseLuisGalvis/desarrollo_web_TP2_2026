export default function TarjetaRepo({
  nombre,
  descripcion,
  lenguaje,
  estrellas,
  actualizado,
  url,
}) {
  return (
    <article className="tarjeta proyecto">
      <h3>{nombre}</h3>
      <p className="repo-desc">{descripcion || "Sin descripción."}</p>
      <div className="repo-meta">
        {lenguaje && <span className="etiqueta-tec">{lenguaje}</span>}
        <span>⭐ {estrellas}</span>
        <span>Actualizado: {actualizado}</span>
      </div>
      <a
        className="boton boton-sec"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        Ver en GitHub
      </a>
    </article>
  );
}
