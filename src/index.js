import React from "react";
import ReactDOM from "react-dom/client";
import { Componente } from "./Componente_clase1";
import JSComponente from "./JSComponente";
import JSXComponente from "./JSXComponente";
import { Saludos, UserCard, Saluditos } from "./Saludos";
import Producto, { Navbar } from "./Producto";
import { Contador } from "./Contador.js"
import EstadoCompleto from "./EstadoComplemento"
import { Button } from "./Button";
import { Tareas } from "./Tareas";
import './styles.css'
import { FormularioControlado } from "./FormularioControlado";
import { FormularioNoControlado } from "./FormularioNoControlado";
import { EstadoFuncional } from "./EstadoFuncional";
import { FormularioValidaciones } from "./FormularioValidaciones";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        {/* <FormularioNoControlado/> */}
        {/* <EstadoFuncional/> */}
        <FormularioValidaciones/>
    </>
);