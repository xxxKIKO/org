import { useState } from "react"
import "./Campo.css"

const Campo = (props) => {
    // const [valor, setValor] = useState("")
    // console.log("Datos: ", props)
    const placeholdermod = `${props.placeholder}...`

    //destructuracion:
    const { type = "text" } = props

    const manejarCambio = (e) => {
        // console.log("cambio", e.target.value)
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholdermod} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
            type = {type}
            />
        </div>
    
}

export default Campo