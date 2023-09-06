import { useState } from 'react';
import { v4 as uuid } from 'uuid'
import './App.css';
import Header from './components/header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer/Footer';
// console.log(header); esto es para ver lo que se esta importando del header


function App() {

  const [mostrarFormulario, actualizarmostrar] = useState(false)
  const [colaboradores,actualizarColaboradores] = useState([{
    id: uuid(),
    nombre: "Emmanuel Figueroa",
    puesto: "Desarrollador",
    foto: "https://github.com/xxxKIKO.png",
    equipo: "Front End",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }])

  const [equipos, actualizarEquipos] = useState ([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])
  
//este operador ternario es como un IF que forma parte de algo que se llama Conditional Rendering en REACT
//Ternario --> condicion ? seMuestra : noSeMuestra
//se puede usa un corto circuito
// condicion && seMuestra

const cambiarMostrar = () => {
  actualizarmostrar(!mostrarFormulario)
}

//funcion para registrar al colaborador
const registrarColaborador = (colaborador) => {
  console.log("Nuevo colaborador", colaborador)
  // Spread Operator, realiza una copia de los valores actuales y posteriormente agrega el colaborador
  actualizarColaboradores([...colaboradores,colaborador])

}

//Eliminar colaborador
const eliminarColaborador = (id) => {
  console.log("Eliminar Colaborador", id)
  const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id != id)
  actualizarColaboradores(nuevosColaboradores)
}

//Actualizar el color de Equipo
const actualizarColor = (color, id) => {
  // console.log("actualizar: ", color, id)
  const equiposActualizados = equipos.map((equipo) => {
    if (equipo.id === id){
      equipo.colorPrimario = color
    }

    return equipo
  })

  actualizarEquipos(equiposActualizados)
}

// funcion para crear equipos
const crearEquipo = (nuevoEquipo) => {
  console.log(nuevoEquipo)
  actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid}])
}

// funcion para hacer like en los colaboradores
const like = (id) => {
  console.log("like", id)
  const colaboradoresActualizados = colaboradores.map((colaborador) => {
    if (colaborador.id === id){
      colaborador.fav = !colaborador.fav
    }
    return colaborador
  })

  actualizarColaboradores(colaboradoresActualizados)
}

  return (
    <div>
      <Header />
      {/* { mostrarFormulario ? <Formulario /> : <></> }  este es el operador ternario*/}
      {
        mostrarFormulario && <Formulario 
            equipos={equipos.map((equipo) => equipo.titulo)}
            registrarColaborador={registrarColaborador}
            crearEquipo={crearEquipo}
          />
      }
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>

      {
        equipos.map( (equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          />
          )
      }

      <Footer/>
    </div>
  );
}

export default App;
