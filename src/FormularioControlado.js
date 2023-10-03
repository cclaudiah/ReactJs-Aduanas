import React from "react";

export class FormularioControlado extends React.Component{
    state = {
        nombre:'',
        email:'',
        asunto:'',
        mensaje:''
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Datos del formulario controladoe.target.', this.state);
    }

    // solo con el nombre
    // handleChange = (e) => {
    //     console.log(e.target.name.value)
    //     this.setState({
    //         nombre : e.target.value,
    //     })
    // }4

    handleChange = (e) => {
        console.log(e.target.name)
        const {name, value} = e.target; //este name es el mismo del input y de rriba del state
        this.setState({
            [name]: value,
        })
    }

    render(){
        return(
            <div className="container">
                <h2>Formulario de contacto</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="label">Nombre:</label>
                        <input className="input" type="text" name="nombre" value={this.state.nombre} onChange={this.handleChange}></input>
                    </div>

                    <div className="form-group">
                        <label className="label">Email:</label>
                        <input className="input" type="email" name="email" value={this.state.email} onChange={this.handleChange}></input>
                    </div>

                    <div className="form-group">
                        <label className="label">Asunto:</label>
                        <input className="input" type="asunto" name="asunto" value={this.state.asunto} onChange={this.handleChange}></input>
                    </div>

                    <div className="form-group">
                        <label className="label">Mensaje:</label>
                        <textarea className="input" type="email" name="mensaje" value={this.state.mensaje} onChange={this.handleChange}></textarea>
                    </div>

                    <button type="submit">Enviar</button>
                </form>
            </div>
        )
    }
}