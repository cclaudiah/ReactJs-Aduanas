import React from "react";

class StateComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Claudia',
            age: 34,
        };
    }

    toClick = () =>{
        this.setState({
            name:'leonardo',
            age: 3,
        });
    }

    render = () =>{
        return(
            <div>
                <h1>Nombre: {this.state.name}</h1>
                <h2>Edad: {this.state.age}</h2>
                <button onClick={this.toClick}>Actualizar</button>
            </div>
        );
    }
}

export default StateComponent;