import {useState} from 'react'
// eslint-disable-next-line no-unused-vars -- se usa al completar el catalogo
import TarjetaEquipo from './TarjetaEquipo'

function Catalogo({equipos}) {
    // eslint-disable-next-line no-unused-vars -- se usa al completar el catalogo
    const [soloDisponibles, setSoloDisponibles] = useState(false)
    // eslint-disable-next-line no-unused-vars -- se usa al completar el catalogo
    const [busqueda, setBusqueda] = useState('')

    // eslint-disable-next-line no-unused-vars -- se usa al completar el catalogo
    const visibles = equipos
        .filter((e) => !soloDisponibles || e.disponible)
        .filter((e) => e.nombre.toLowerCase().includes(busqueda.toLowerCase()))
    
    const totalDisponibles = equipos.reduce((suma, e) => (e.disponible ? suma + 1 : suma), 0)

    return (
        <section>
            <h2>Catalogo</h2>
            <p>{totalDisponibles} de {equipos.length} equipos disponibles</p>
        </section>
    )

}

export default Catalogo