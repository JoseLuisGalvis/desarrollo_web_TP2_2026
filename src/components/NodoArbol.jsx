export default function NodoArbol({ nodo, abierto }) {
  const { nombre, tipo, descripcion, hijos } = nodo;

  const cabecera = (
    <>
      <code className="nodo-nombre">{nombre}</code>
      <span className="registro-tipo">{tipo}</span>
      <span className="nodo-desc">{descripcion}</span>
    </>
  );

  if (!hijos || hijos.length === 0) {
    return <li className="nodo nodo-hoja">{cabecera}</li>;
  }

  return (
    <li className="nodo">
      <details open={abierto}>
        <summary>{cabecera}</summary>
        <ul className="arbol-lista">
          {hijos.map((hijo) => (
            <NodoArbol key={hijo.nombre} nodo={hijo} abierto={abierto} />
          ))}
        </ul>
      </details>
    </li>
  );
}
