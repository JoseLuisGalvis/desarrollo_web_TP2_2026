import { useEffect, useState } from "react";
import TarjetaRepo from "../components/TarjetaRepo.jsx";

const USUARIO = "JoseLuisGalvis";
const URL_API = `https://api.github.com/users/${USUARIO}/repos?sort=updated&per_page=12`;

export default function Api() {
  const [estado, setEstado] = useState({
    cargando: true,
    error: null,
    repos: [],
  });
  const [intento, setIntento] = useState(0);

  useEffect(() => {
    const controlador = new AbortController();

    fetch(URL_API, { signal: controlador.signal })
      .then((res) => {
        if (res.status === 403) {
          throw new Error(
            "Se alcanzó el límite de consultas que GitHub permite sin autenticación (60 por hora por IP).",
          );
        }
        if (!res.ok) {
          throw new Error(`GitHub respondió con el código ${res.status}.`);
        }
        return res.json();
      })
      .then((datos) =>
        setEstado({ cargando: false, error: null, repos: datos }),
      )
      .catch((err) => {
        if (err.name === "AbortError") return;
        const mensaje =
          err instanceof TypeError
            ? "No se pudo conectar con GitHub. Revisá tu conexión a internet."
            : err.message;
        setEstado({ cargando: false, error: mensaje, repos: [] });
      });

    return () => controlador.abort();
  }, [intento]);

  function reintentar() {
    setEstado({ cargando: true, error: null, repos: [] });
    setIntento((n) => n + 1);
  }

  return (
    <section>
      <p className="etiqueta">API pública · GitHub REST</p>
      <h1>API pública</h1>
      <p>
        Esta sección consulta la API REST pública de GitHub y muestra los
        repositorios públicos más recientes de la cuenta{" "}
        <strong>{USUARIO}</strong>: nombre, descripción, lenguaje principal,
        estrellas y fecha de la última actualización. No requiere clave y se
        consulta directamente desde el navegador.
      </p>

      <div className="acciones">
        <button
          type="button"
          className="boton boton-sec"
          onClick={reintentar}
          disabled={estado.cargando}
        >
          Actualizar
        </button>
      </div>

      {estado.cargando && (
        <p className="estado" role="status">
          Cargando repositorios desde GitHub…
        </p>
      )}

      {estado.error && (
        <div className="estado estado-error" role="alert">
          <p>{estado.error}</p>
          <button type="button" className="boton" onClick={reintentar}>
            Reintentar
          </button>
        </div>
      )}

      {!estado.cargando &&
        !estado.error &&
        (estado.repos.length === 0 ? (
          <p className="estado">
            Esta cuenta no tiene repositorios públicos para mostrar.
          </p>
        ) : (
          <div className="grilla">
            {estado.repos.map((r) => (
              <TarjetaRepo
                key={r.id}
                nombre={r.name}
                descripcion={r.description}
                lenguaje={r.language}
                estrellas={r.stargazers_count}
                actualizado={new Date(r.updated_at).toLocaleDateString("es-AR")}
                url={r.html_url}
              />
            ))}
          </div>
        ))}
    </section>
  );
}
