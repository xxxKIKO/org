import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Button from "../button"

const Formulario = (props) => {

const [nombre,actualizarNombre] = useState("")
const [puesto,actualizarPuesto] = useState("")
const [foto,actualizarFoto] = useState("")
const [equipo, actualizarEquipo] = useState("")

const [titulo, actualizarTitulo] = useState("")
const [color, actualizarColor] = useState("")

const {registrarColaborador, crearEquipo} = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        // console.log("Manjear el envío ");
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el Formualrio para crear el colaborador.</h2>
            <Campo titulo="Nombre" 
                placeholder="Ingresar Nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingresar Puesto" 
                required
                valor={puesto} 
                actualizarValor={actualizarPuesto}
            />
            <Campo 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required
                valor={foto} 
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones 
                valor = {equipo}
                actualizarEquipo = {actualizarEquipo}
                equipos = {props.equipos}
            />
            <Button texto="Crear"/>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el Formualrio para crear el equipo.</h2>
            <Campo titulo="Titulo" 
                placeholder="Ingresar titulo" 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo}
            />
            <Campo 
                titulo="Color" 
                placeholder="Ingresar Color en HEX" 
                required
                valor={color} 
                actualizarValor={actualizarColor}
                type="color"
            />
            <Button texto="Registrar Equipo"/>
        </form>
    </section>
}

export default Formulario