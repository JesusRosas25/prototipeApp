import React from "react";
import ConfigClient from "../components/config-client";

export const Configuracion = () => {
    return (
        <div className="container"
        style={{textAlign: "center"}}>
            <h2 className="mt-5">Configuración de cliente</h2>
            <ConfigClient />
        </div>
    );
};

export default Configuracion;