import React from "react";
import { Container } from "react-bootstrap";
import Highlight from "../components/highlight";

export const ExternalApi = () => {

  return (
    <Container className="mb-5, mt-3"
    style={{textAlign: "center"}}>
      <h2 className="mt-5">Datos de envio</h2>
      <br />

      <Highlight />
    </Container>
  );
};

export default ExternalApi;
