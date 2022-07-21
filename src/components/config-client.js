import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import Switch from "./switch";
function ConfigClient() {
    return (
        <Container fluid>
            <div style={{textAlign: "center"}}>
                <h5>Actualizar precio y stock</h5>
                <br/>
                <Switch />
            </div>  
            <fieldset>
                <Form.Control
                    type="text"
                    placeholder="client_id"
                    aria-label="ari"
                    disabled
                    readOnly
                />                
                <br />            
                <Form.Control
                    type="text"
                    placeholder="redirect_url"
                    aria-label=""
                    readOnly
                />
                <br />
                <Form.Control
                    type="text"
                    placeholder="porcentajeMeli2"
                    aria-label=""
                    readOnly
                />
                <br />
                <Form.Control
                    type="text"
                    placeholder="porcentajeMShop"
                    aria-label=""
                    readOnly
                />
                <br />
                <Form.Control
                    type="text"
                    placeholder="stockMin"
                    aria-label=""
                    readOnly
                />
                <br />
                <Form.Control
                    type="text"
                    placeholder="NICKNAME1 Meli"
                    aria-label=""
                    readOnly
                />
                <br />
                <Form.Control
                    type="text"
                    placeholder="minimoPrecioItem"
                    aria-label=""
                    readOnly
                />
                <br />
                <Button type="submit">Enviar</Button>
            </fieldset>
        </Container>
    );

};

export default ConfigClient;