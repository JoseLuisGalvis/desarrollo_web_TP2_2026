import { Link } from "react-router";
import TarjetaIntegrante from "../components/TarjetaIntegrante.jsx";

const integrantes = [
  {
    id: 1,
    nombre: "José Luis Galvis",
    rol: "Desarrollo Front End",
    foto: "/img/jose-luis.jpg",
    github: "https://github.com/JoseLuisGalvis",
    portafolio: "https://dev-portfolio-2025.vercel.app/",
  },
];

export default function Inicio() {
  return (
    <>
      <section className="portada">
        <p className="etiqueta">
          Desarrollo de Sistemas Web · Front End · IFTS N° 29
        </p>
        <h1>Team Two</h1>
        <p className="portada-texto">
          Team Two reúne en una sola aplicación React sus proyectos, sus
          herramientas y el recorrido del equipo. Esta versión continúa el sitio
          del TP1 y suma navegación con React Router, datos dinámicos y una API
          pública.
        </p>
        <div className="acciones">
          <Link className="boton" to="/proyectos">
            Ver proyectos
          </Link>
          <Link className="boton boton-sec" to="/bitacora">
            Leer la bitácora
          </Link>
        </div>
      </section>

      <section>
        <h2>Integrantes</h2>
        <div className="grilla">
          {integrantes.map((i) => (
            <TarjetaIntegrante key={i.id} {...i} />
          ))}
        </div>
      </section>
    </>
  );
}
