import { useState } from 'react'
import proyectos from '../data/proyectos.json'
import TarjetaProyecto from '../components/TarjetaProyecto.jsx'

const TODAS = 'Todas'

function normalizar(texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
}

const tecnologias = [TODAS, ...new Set(proyectos.map((p) => p.tecnologia))]

export default function Proyectos() {
  const [busqueda, setBusqueda] = useState('')
  const [tecnologia, setTecnologia] = useState(TODAS)

  const texto = normalizar(busqueda.trim())
  const filtrados = proyectos.filter((p) => {
    const coincideTec = tecnologia === TODAS || p.tecnologia === tecnologia
    const coincideTexto = normalizar(`${p.nombre} ${p.tecnologia}`).includes(texto)
    return coincideTec && coincideTexto
  })

  const hayFiltros = busqueda !== '' || tecnologia !== TODAS

  function restablecer() {
    setBusqueda('')
    setTecnologia(TODAS)
  }

  return (
    <section>
      <p className="etiqueta">Datos locales · JSON</p>
      <h1>Proyectos</h1>
      <p>Listado de proyectos del equipo, cargado desde un archivo JSON local.</p>

      <div className="filtros">
        <div className="campo">
          <label htmlFor="busqueda">Buscar</label>
          <input
            id="busqueda"
            type="search"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Nombre o tecnología…"
          />
        </div>
        <div className="campo">
          <label htmlFor="filtro-tec">Tecnología</label>
          <select id="filtro-tec" value={tecnologia} onChange={(e) => setTecnologia(e.target.value)}>
            {tecnologias.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        {hayFiltros && (
          <button type="button" className="boton boton-sec" onClick={restablecer}>
            Restablecer
          </button>
        )}
      </div>

      <p className="conteo" aria-live="polite">
        Mostrando {filtrados.length} de {proyectos.length} proyectos
      </p>

      {filtrados.length === 0 ? (
        <div className="vacio">
          <p>No hay proyectos que coincidan con la búsqueda.</p>
          <button type="button" className="boton" onClick={restablecer}>Mostrar todos</button>
        </div>
      ) : (
        <div className="grilla">
          {filtrados.map((p) => (
            <TarjetaProyecto key={p.id} {...p} />
          ))}
        </div>
      )}
    </section>
  )
}
