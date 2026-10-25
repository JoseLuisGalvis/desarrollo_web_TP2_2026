export default function BarraHabilidad({ nombre, nivel }) {
  return (
    <div className="habilidad">
      <span className="habilidad-nombre">{nombre}</span>
      <div
        className="barra"
        role="progressbar"
        aria-label={`${nombre}: ${nivel}%`}
        aria-valuenow={nivel}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="barra-relleno" style={{ width: `${nivel}%` }} />
      </div>
    </div>
  );
}
