import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Highlight() {
  return (
    <>
      <Form.Control id="disabledTextInput" placeholder="ID Pedido" />
      <br />
      <Form.Control id="disabledTextInput1" placeholder="IdPedido" />
      <br />
      <Form.Control id="disabledTextInput2" placeholder="Email" />
      <br />
      <Form.Control id="disabledTextInput3" placeholder="IdEnvio" />
      <br />
      <select class="browser-default custom-select">
        <option value="1">Envio flex</option>
        <option value="2">Mercado Envios</option>
        <option value="3">Retira en domicilio</option>
      </select>
      <br />
      <br />
      <Form.Control id="disabledTextInput3" placeholder="MercadoEnvioTracking" />
      <br />  
      <br />
      <Button type="submit">Submit</Button>      
    </>
  );
}

export default Highlight;
