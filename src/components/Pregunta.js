import React, {Fragment, useState} from 'react'
import Error from './Error'
// import PropTypes from 'prop-types'

function Pregunta(props) {

    const {guardarPresupuesto, guardarPreguntaPresupuesto, guardarRestante} = props

    //definir el state
    const [cantidad, guardarCantidad] = useState(0)
    const [error, guardarError] = useState(false)

    //validar el presupuesto
    const agregarPresupuesto = e =>{
        e.preventDefault()

        //validar
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true)
            return
        }

        //Si se pasa la validación
        guardarError(false)
        guardarPresupuesto(cantidad)
        guardarRestante(cantidad)
        guardarPreguntaPresupuesto(false)
    }
    return (
        <Fragment >
            <h2>Coloca tu presupuesto</h2>

            {error ? <Error mensaje="El presupuesto es Incorrecto" />: null}

            <form 
                action=""
                onSubmit={agregarPresupuesto}
            >
                <input type="number"
                        className="u-full-width"
                        placeholder="Agregar presupuesto"
                        onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                />
                <input type="submit" className="button-primary u-full-width" value="Definir presupuesto"/>
            </form>
        </Fragment>
    )
}

Pregunta.propTypes = {

}

export default Pregunta
