import perfil from "../data/perfil.json";
import TarjetaFlip from "../components/TarjetaFlip.jsx";
import BarraHabilidad from "../components/BarraHabilidad.jsx";

export default function Perfil() {
  return (
    <section>
      <div className="perfil-cabecera">
        <TarjetaFlip
          nombre={perfil.nombre}
          foto={perfil.foto}
          datos={perfil.datosCuriosos}
        />
        <div>
          <p className="etiqueta">Perfil</p>
          <h1>{perfil.nombre}</h1>
          <p className="perfil-meta">
            📍 {perfil.ubicacion} · 💻 {perfil.rol}
          </p>
          <p>{perfil.bio}</p>
          <div className="acciones">
            <a
              className="boton"
              href={perfil.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="boton boton-sec"
              href={perfil.portafolio}
              target="_blank"
              rel="noreferrer"
            >
              Portafolio
            </a>
          </div>
        </div>
      </div>

      <h2>Habilidades</h2>
      <div className="habilidades">
        {perfil.habilidades.map((h) => (
          <BarraHabilidad key={h.nombre} nombre={h.nombre} nivel={h.nivel} />
        ))}
      </div>
    </section>
  );
}
