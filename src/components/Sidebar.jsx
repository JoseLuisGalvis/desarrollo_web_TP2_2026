import { NavLink } from "react-router";

const enlaces = [
  { to: "/", texto: "Inicio", end: true },
  { to: "/perfil", texto: "Perfil" },
  { to: "/proyectos", texto: "Proyectos" },
  { to: "/api-publica", texto: "API pública" },
  { to: "/arbol", texto: "Árbol de renderizado" },
  { to: "/bitacora", texto: "Bitácora" },
];

export default function Sidebar({ abierto, onNavegar }) {
  return (
    <aside id="sidebar" className={abierto ? "sidebar abierta" : "sidebar"}>
      <div className="marca">
        <div className="marca-logo">T2</div>
        <div>
          <p className="marca-nombre">Team Two</p>
          <p className="marca-sub">TP2 · React</p>
        </div>
      </div>
      <nav aria-label="Secciones">
        <ul className="nav-lista">
          {enlaces.map((e) => (
            <li key={e.to}>
              <NavLink
                to={e.to}
                end={e.end}
                className={({ isActive }) =>
                  isActive ? "nav-link activo" : "nav-link"
                }
                onClick={onNavegar}
              >
                {e.texto}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
