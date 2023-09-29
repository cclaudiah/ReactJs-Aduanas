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

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <>
        <Contador/>
        <EstadoCompleto/>
        <Button texto='Click me'/>
        <Button texto='Pay'/>
        <Button texto='' nombre='Claudia'/>
        <Button/>

        <input id="input1" onChange={function(e){
                //console.log(e.target.value+'........')
                console.log(e.target.id+'........')
        }} />
    </>
)