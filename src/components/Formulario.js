import React, {useState} from 'react'
import Error from './Error'
import shortid from 'shortid'
// import PropTypes from 'prop-types'



function Formulario(props) {

    const {guardarGasto, guardarCrearGasto} = props

    //state
    const [nombreGasto, guardarNombreGasto] = useState('')
    const [cantidadGasto, guardarCantidadGasto] = useState(0)
    const [error, guardarError] = useState(false)

    // Cuando se agrega el gasto
    const agregarGasto =e =>{
        e.preventDefault()

        //validar
        if(cantidadGasto < 1 || isNaN(cantidadGasto) || nombreGasto === ''){
            guardarError(true)
            return
        }

        //construir objeto de gasto
        const gasto = {
            nombreGasto,
            cantidadGasto,
            id: shortid.generate()
        }

        //pasar el gasto al componente principal
        guardarGasto(gasto)
        guardarCrearGasto(true)

        //eliminar alerta
        guardarError(false)

        //resetear el form
        guardarNombreGasto('')
        guardarCantidadGasto('')
    }

    return (
        <div>
            <form action=""
                onSubmit={agregarGasto}
            >
                <h2>Agrega tus gastos aquí</h2>
                {error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto Incorrecto" />: null}
                <div className="campo">
                    <label htmlFor="">Nombre Gasto</label>
                    <input type="text"
                            className="u-full-width"
                            placeholder="Ej. Transporte"
                            onChange={e => guardarNombreGasto(e.target.value)}
                            value={nombreGasto}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="">Cantidad Gasto</label>
                    <input type="number"
                            className="u-full-width"
                            placeholder="Ej. 200"
                            onChange={e => guardarCantidadGasto( parseInt( e.target.value, 10) )}
                            value={cantidadGasto}
                    />
                </div>
                <input type="submit" value="Agregar Gasto" className="button-primary u-full-width" />
            </form>
        </div>
    )
}

Formulario.propTypes = {

}

export default Formulario

