import React from "react";

const JsComponente =() => {
    return React.createElement(
        'div',
        null,
        React.createElement('h1', null, 'Hola, soy un componente sin JSX'),
        React.createElement('p', null, 'Este componente esta escrito en Javascript')
    );
}

export default JsComponente;