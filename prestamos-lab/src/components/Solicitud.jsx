function Solicitud({ solicitados, onQuitar }) {
  return (
    <section>
      <h2>Mi solicitud ({solicitados.length})</h2>

      {solicitados.length === 0 ? (
        <p>Todavía no agregas equipos</p>
      ) : (
        <ul>
          {solicitados.map((e) => (
            <li key={e.id}>
              {e.nombre}
              <button type="button" onClick={() => onQuitar(e.id)}>
                Quitar

              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Solicitud