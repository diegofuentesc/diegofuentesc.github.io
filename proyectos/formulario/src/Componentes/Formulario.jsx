import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';



const Formulario = ({lstColaboradores, setLstColaboradores}) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');

    const agregarColaborador = (e) => {

        e.preventDefault();
        setLstColaboradores([...lstColaboradores,{nombre: nombre, correo: email}]);
    }
  return (
    <div className='p-2'>
        <Form onSubmit={agregarColaborador}>
        <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" id="nombre" name="nombre" placeholder='Nombre Colaborador' onChange={(e) => setNombre(e.target.value)} />
            <Form.Label>Correo</Form.Label>
            <Form.Control  type="email" id="email" name="email" placeholder='Email Colaborador' onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Agregar Colaborador
            </Button>

        </Form>
    </div>
  )
}

export default Formulario