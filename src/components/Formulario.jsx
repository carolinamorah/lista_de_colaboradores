import {useState} from 'react'
import { nanoid } from 'nanoid'


const Formulario = (Props) => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    

    const agregarColaboradorForm = (e) => {
        e.preventDefault();

        if (!nombre.trim() || !correo.trim()) {
                alert("Debes ingresar los datos solicitados");
            } else {
                const Colaborador = { 
                    id: nanoid(), 
                    nombre: nombre, 
                    correo: correo 
                }

                Props.agregarColaborador(Colaborador);

                setNombre("")
                setCorreo("")
            }       
    };

    return (
    <>
        <form className="formulario" onSubmit={agregarColaboradorForm}>
            <div className='form-group mt-5 mx-auto col-6'>
                <label>Nombre del colaborador</label>
                <input onChange={(e) => setNombre(e.target.value)} className="form-control mt-3 mb-5" type="text" name="Nombre del Colaborador" value={nombre} placeholder='Ingresa nombre'></input>
            </div>
            <div className='form-group mt-3 mx-auto col-6'>
                <label>Correo del colaborador</label>
                <input onChange={(e) => setCorreo(e.target.value)} className="form-control mt-3 mb-5" type="email" value={correo} placeholder='Ingresa correo'></input>
            </div>
            <div className='text-center'>
                <button type="submit" className="btn btn-warning">Agregar colaborador</button>
            </div>
        </form>
    </>
    )
}

export default Formulario
