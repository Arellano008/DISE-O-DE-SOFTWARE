import {useState} from 'react'
import TarjetaEquipo from './TarjetaEquipo'

function Catalogo({equipos, solicitados, onAgregar}) {
    console.log('render Catalogo')
    const [soloDisponibles, setSoloDisponibles] = useState(false)
    const [busqueda, setBusqueda] = useState('')

    const visibles = equipos
        .filter((e) => !soloDisponibles || e.disponible)
        .filter((e) => e.nombre.toLowerCase().includes(busqueda.toLowerCase()))
    
    const totalDisponibles = equipos.reduce((suma, e) => (e.disponible ? suma + 1 : suma), 0)

    return (
        <section>
            <h2>Catalogo</h2>
            <p>{totalDisponibles} de {equipos.length} equipos disponibles</p>

            <label>
                Buscar equipo
                <input value={busqueda} onChange={(ev)=> setBusqueda(ev.target.value)}></input>
            </label>

            <label>
                <input 
                    type="checkbox"
                    checked={soloDisponibles}
                    onChange={(ev) => setSoloDisponibles(ev.target.checked)}
                />
                Solo Disponibles
            </label>
            {visibles.length === 0 ?(
                <p> No hay equipos que coincidan con la busqueda</p>
            ) : (
                <div className="lista">
                    {visibles.map((e)=> (
                        <TarjetaEquipo
                            key={e.id}
                            equipo={e}
                            solicitados={solicitados}
                            onAgregar={onAgregar}
                        />
                    ))}

                </div>
            )}
        </section>
    )

}

export default Catalogo