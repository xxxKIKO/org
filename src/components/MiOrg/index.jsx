
import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    // Estados con funcionalidad hooks (a partir de la versión 16), ayudan a trabajar con el comportamiento de react
    //uno de estos hooks es: useState
    // usestate() se usa como una función
    //const [nombrevariable, funcionqueactualiza] = useState(valorInicial)
    //const [nombre, actualizarNombre] = useState("Emmanuel")

    console.log(props);

// const [mostrar,actualizarMostrar] = useState(true)
// const manejarClick = () => {
//     console.log("Mostrar/Ocultar elemento", !mostrar)
//     actualizarMostrar(!mostrar)
// }

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="addperson" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg