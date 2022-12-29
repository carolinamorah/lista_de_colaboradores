import { BaseColaboradores } from "./BaseColaboradores.js";
import {useState} from "react";
import Buscador from "./components/Buscador.jsx";
import Formulario from "./components/Formulario.jsx"
import ListadoColaboradores from "./components/ListadoColaboradores.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [busqueda, setBusqueda] = useState("");

  const agregarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Buscador setBusqueda={setBusqueda} ></Buscador>
      <div className="main ml-5">
        <Formulario agregarColaborador={agregarColaborador}></Formulario>
        <ListadoColaboradores colaboradores={colaboradores} busqueda={busqueda}></ListadoColaboradores>
      </div>
    </div>
  );
}

export default App;
