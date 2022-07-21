import React from 'react';
import Form from 'react-bootstrap/Form';

function Switch() {
  return (
    <Form>
      <div className="custom-control custom-switch">
        <input type="checkbox" className="custom-control-input" id="customSwitches" />
        <label className="custom-control-label" htmlFor="customSwitches">Activar/Desactivar</label>
      </div>
      <br />
    </Form>
  );
}

export default Switch;