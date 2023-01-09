import { useState } from "react";
import { BaseColaboradores } from './BaseColaboradores.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Componentes/Header.jsx";
import Formulario from "./Componentes/Formulario.jsx";
import ListaColaboradores from "./Componentes/ListaColaboradores.jsx";

function App() {

  const [lstColaboradores, setLstColaboradores] = useState(BaseColaboradores);
  const [v, setValor] = useState('');

  return (
    <div className="App">
     <Header v={v} setValor={setValor}></Header>
     <Formulario lstColaboradores={lstColaboradores} setLstColaboradores={setLstColaboradores}></Formulario>
     <ListaColaboradores v={v} lstColaboradores={lstColaboradores}></ListaColaboradores>
    </div>
  );
}

export default App;
