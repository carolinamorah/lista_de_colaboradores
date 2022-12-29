import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';


const Buscador = (Props) => {
    const buscarColaborador = (e) => Props.setBusqueda(e.target.value);

    return (
        <Navbar bg="secondary" expand="lg">
            <Container >
                <h3 className="search-title text-light">Buscador de colaboradores</h3>
                <Form className="input col-5">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-5"
                        aria-label="Search"
                        onChange={buscarColaborador}
                    />
                </Form>
            </Container>
        </Navbar>
    )
}

export default Buscador
