export default function TarjetaProyecto({ id, nombre, tecnologia, enlace }) {
  return (
    <article className="tarjeta proyecto">
      <p className="proyecto-num">N.º {String(id).padStart(2, '0')}</p>
      <h3>{nombre}</h3>
      <span className="etiqueta-tec">{tecnologia}</span>
      <div>
        <a className="boton boton-sec" href={enlace} target="_blank" rel="noreferrer">
          Ver proyecto
        </a>
      </div>
    </article>
  )
}