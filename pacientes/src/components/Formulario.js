import React, {Fragment, useState} from 'react';
import { v4 as uuid_v4 } from "uuid";

const Formulario = ({crearCita})=>{

    // Crear State de Citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha:'',
        hora:'',
        descripcion:''
    })
    const[error, actualizarError] = useState(false)

    //Función que se ejecuta cada vez que el usuario escribe en un input

    const actualizarState = e =>{
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    //Extraer los valores
    const {  mascota, propietario, fecha,hora, descripcion}= cita;

    //Cuando el usuario presiona agregar cita
    const submitCita = e =>{
        e.preventDefault();
        
        //Validar
        if (mascota.trim()===''|| propietario.trim()===''|| fecha.trim()===''|| hora.trim()===''|| descripcion.trim()==='') {
            
            actualizarError(true);
            return;
        }
        //Eliminar el mensaje previo 
        actualizarError(false);

        //Asignar un ID
        cita.id = uuid_v4();
       
        //Crear la cita
        crearCita(cita);

        //Reiniciar el form

    }


    return(
        <Fragment>
            <h2>Crear Cita</h2>
            { error ? <p className="alerta-error">Todos los campos son Obligatorios</p> : null }
            <form 
                onSubmit={submitCita}
            >

                <label>Nombre Mascota *</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange ={actualizarState}
                    value={mascota}
                />
                <label>Nombre dueño de la mascota *</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la mascota"
                    onChange ={actualizarState}
                    value={propietario}
                />
                <label>Fecha *</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange ={actualizarState}
                    value ={fecha}
                />
                    <label>Hora *</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange ={actualizarState}
                    value={hora}
                />
                    <label>Descripcion Síntomas *</label>
                <textarea
                
                    name="descripcion"
                    className="u-full-width"
                    placeholder="Descripción"
                    onChange ={actualizarState}
                    value={descripcion}
                >

                </textarea>
                <button
                type="submit"
                className="u-half-width button-primary"
                
                >AGREGAR CITA
                </button>
            </form>

        </Fragment>
    );
}

export default Formulario;