import React,{Fragment, useState } from 'react';
import Formulario from './components/Formulario';


function App() {

  // Arreglo de citas
  const [citas, guardarCitas] = useState([]);


  // Funcion que tome las citas actuales y agregue una nueva 
    const crearCita = cita =>{
      console.log(cita);
    }
  return (
   <Fragment>
     <h1>Administrador de citas de Pacientes</h1>

<div className="container">
    <div className="row">
      <div className="one-half column">
        <Formulario 
          crearCita={crearCita}
        />
      </div>
      <div className="one-half column">
          2
      </div>
    </div>
</div>

   </Fragment>
    

  );
}

export default App;
