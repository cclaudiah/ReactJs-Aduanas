import React from "react";

// se debe poner export para importarlo en el index
export class Contador extends React.Component {
// export class Contador extends React.PureComponent { Reduce la sobrecarga
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        };
    }

    incrementar = () => {
        this.state({ count: this.state.count + 1 });
    };
    
    disminuir = () => {
        this.setState({ count: this.state.count - 1 });
    };

    render(){
        return(
            <div>
                <h2>Contador: {this.state.count}</h2>
                <button onClick={this.incrementar}>Incrementar</button>
                <button onClick={this.disminuir}>Disminuir</button>
            </div>
        )
    }
}



