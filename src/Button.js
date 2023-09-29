import PropTypes from "prop-types";

export function Button({texto, nombre}){
    //console.log(texto)
    if(!texto){
        console.error('El texto es requerido')
    }
    return <button onClick={function () {
        console.log('Hola Mundo!')
    }}>
        {texto} - {nombre}
    </button>
}

Button.propTypes = {
    texto: PropTypes.string.isRequired
}

Button.defaultProps = {
    nombre: 'Un usuario'
}