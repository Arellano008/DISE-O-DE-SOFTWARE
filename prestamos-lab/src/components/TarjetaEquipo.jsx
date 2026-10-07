function TarjetaEquipo({ equipo, solicitados, onAgregar }) {
  const { id, nombre, categoria, cantidad, disponible } = equipo
  const yaAgregado = solicitados.filter((s) => s.id === id).length > 0

  return (
    <div className="tarjeta">
      <h3>{nombre}</h3>
      <p>{id} - {categoria}</p>
      <p>Cantidad: {cantidad}</p>
      <p>{disponible ? 'Disponible' : 'Prestado'}</p>
      <button
        type="button"
        disabled={!disponible || yaAgregado}
        onClick={() => onAgregar(equipo)}
      >
        {disponible ? 'Solicitar' : 'No disponible'}
      </button>
    </div>
  )
}

export default TarjetaEquipo