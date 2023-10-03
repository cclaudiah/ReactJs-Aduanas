import React from "react";

export class FormularioNoControlado extends React.Component{
// hace una referencia para apuntar a compo del formulario

    inputRef = React.createRef(); 

    handleSubmit = (e) => {
        e.preventDefault();
        const nombre = this.inputRef.current.value;
        console.log('Datos del formulario no controlado', nombre);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" ref={this.inputRef}></input>
                </div>
                <button type="submit">Enviar</button>
            </form>
        )
    }
}