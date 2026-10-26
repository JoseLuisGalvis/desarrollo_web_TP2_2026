import registros from "../data/bitacora.json";
import RegistroBitacora from "../components/RegistroBitacora.jsx";

export default function Bitacora() {
  return (
    <section>
      <p className="etiqueta">Proceso de trabajo</p>
      <h1>Bitácora</h1>
      <p>
        Registros breves de lo que se hizo, se decidió o se resolvió durante el
        TP2. Tocá cada registro para leerlo.
      </p>
      <div className="bitacora">
        {registros.map((r) => (
          <RegistroBitacora key={r.id} {...r} />
        ))}
      </div>
    </section>
  );
}
