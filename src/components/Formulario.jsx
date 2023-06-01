import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Button, Form } from 'react-bootstrap';

function Formulario() {
  //props y states
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [dni, setDni] = useState('');
  const [email, setEmail] = useState('');
  const [validated, setValidated] = useState(false); // Variable de estado para controlar validacion

  //funcion que envia el formulario obteniendo el form actual
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();

    //modal
    if (form.checkValidity()) {
      Swal.fire({
        icon: 'success',
        iconColor: '#198754',
        title: 'Éxito!',
        text: 'DATOS ENVIADOS CORRECTAMENTE.',
        background: '#fff',
        color: '#198754',
        showConfirmButton: false,
        timer: 1500,
      });
      limpiarFormulario();
      setValidated(false); // Restablece validacion
    } else {
      Swal.fire({
        icon: 'error',
        iconColor: '#f51707',
        title: 'ERROR',
        text: 'DEBE DE COMPLETAR TODOS LOS CAMPOS',
        background: '#fff',
        color: '#f51707',
        confirmButtonColor: '#198754',
      });
      setValidated(true); // Marcar el formulario como validado
    }
  };

  //Limpia formulario
  const limpiarFormulario = () => {
    setNombre('');
    setApellido('');
    setDni('');
    setEmail('');
  };
  //Tengo dudas con el "validated"
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="d-flex flex-column justify-content-center text-center">
      <Form.Group controlId="inputNombre">
        <Form.Label className="react-label">Nombre: </Form.Label>
        <Form.Control
          required
          minLength={3}
          maxLength={25}
          className="react-input"
          type="text"
          placeholder="Nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
          }}
        />
        <Form.Control.Feedback type="invalid">
          Por favor ingresa un nombre válido de 3 a 25 caracteres.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="inputApellido">
        <Form.Label className="react-label">Apellido: </Form.Label>
        <Form.Control
          required
          minLength={3}
          maxLength={25}
          className="react-input"
          type="text"
          placeholder="Apellido"
          name="apellido"
          value={apellido}
          onChange={(e) => {
            setApellido(e.target.value);
          }}
        />
        <Form.Control.Feedback type="invalid">
          Por favor ingresa un apellido válido de 3 a 25 caracteres.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="inputDNI">
        <Form.Label className="react-label">DNI: </Form.Label>
        <Form.Control
          required
          minLength={7}
          maxLength={8}
          className="react-input"
          type="text"
          placeholder="DNI"
          pattern="^\d{7,8}$"
          name="dni"
          value={dni}
          onChange={(e) => {
            setDni(e.target.value);
          }}
        />
        <Form.Control.Feedback type="invalid">
          Por favor ingresa un número de DNI válido de 7 u 8 caracteres
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="inputEmail">
        <Form.Label className="react-label">Correo electrónico: </Form.Label>
        <Form.Control
          required
          className="react-input"
          type="email"
          placeholder="Correo electrónico"
          name="email"
          value={email}
          pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Form.Control.Feedback type="invalid">
          Por favor ingresa un correo electrónico válido.
        </Form.Control.Feedback>
      </Form.Group>
      <Button type="submit">Enviar formulario</Button>
    </Form>
  );
}

export default Formulario;
