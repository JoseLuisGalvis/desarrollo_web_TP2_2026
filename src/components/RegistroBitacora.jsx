export default function RegistroBitacora({ fecha, tipo, titulo, texto }) {
  return (
    <details className="registro">
      <summary>
        <span className="registro-fecha">{fecha}</span>
        <span className="registro-tipo">{tipo}</span>
        <span className="registro-titulo">{titulo}</span>
      </summary>
      <p>{texto}</p>
    </details>
  );
}
