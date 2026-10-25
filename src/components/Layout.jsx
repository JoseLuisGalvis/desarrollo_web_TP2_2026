import { useState } from "react";
import Sidebar from "./Sidebar.jsx";

export default function Layout({ children }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="layout">
      <button
        className="menu-btn"
        onClick={() => setAbierto(!abierto)}
        aria-expanded={abierto}
        aria-controls="sidebar"
        aria-label="Abrir o cerrar el menú"
      >
        ☰
      </button>
      <Sidebar abierto={abierto} onNavegar={() => setAbierto(false)} />
      {abierto && <div className="overlay" onClick={() => setAbierto(false)} />}
      <main className="contenido">{children}</main>
    </div>
  );
}
