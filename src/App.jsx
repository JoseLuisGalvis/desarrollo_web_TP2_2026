import { Routes, Route } from "react-router";
import Layout from "./components/Layout.jsx";
import Inicio from "./pages/Inicio.jsx";
import Perfil from "./pages/Perfil.jsx";
import Proyectos from "./pages/Proyectos.jsx";
import Api from "./pages/Api.jsx";
import Arbol from "./pages/Arbol.jsx";
import Bitacora from "./pages/Bitacora.jsx";
import NoEncontrada from "./pages/NoEncontrada.jsx";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/api-publica" element={<Api />} />
        <Route path="/arbol" element={<Arbol />} />
        <Route path="/bitacora" element={<Bitacora />} />
        <Route path="*" element={<NoEncontrada />} />
      </Routes>
    </Layout>
  );
}
