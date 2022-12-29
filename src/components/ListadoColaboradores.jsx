/* eslint-disable array-callback-return */
import React from 'react'
import { Table } from 'react-bootstrap';



const ListadoColaboradores = (Props) => {
    return (
        <div className='listado text-center'>
            <h3 className='title-list my-5'>Lista de Colaboradores</h3>

            <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Nombre Colaborador</th>
                    <th>Email Colaborador</th>
                </tr>
            </thead>
            <tbody>
                {Props.colaboradores.filter((val) => {
                    if (val.nombre.toLowerCase().includes(Props.busqueda.toLowerCase())
                    || val.correo.toLowerCase().includes(Props.busqueda.toLowerCase())) {
                        return val;
                    }
                    return;

                    }).map(colab => {
                        return <tr key={colab.id}>
                                    <td>{colab.nombre}</td>
                                    <td>{colab.correo}</td>
                                </tr>;
                        } 
                    )
                } 
            </tbody> 
            </Table> 
        </div> 
    )
}

export default ListadoColaboradores
