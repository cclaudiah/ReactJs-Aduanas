export function Saludos(props) {
    console.log(props)
    return <h1>{props.w}</h1>
}

export function UserCard(props){
    console.log(props);
    return(
        <div>
            <h1>{props.nombre}</h1>
            <p>{props.cuenta}</p>
            <p>{props.casado ? "Casado" : "Soltero"}</p>
            <ul>
                <li>
                    ciudad: {props.ciudad}
                </li>
                <li>
                    Dirección: {props.direccion.calle}
                </li>
            </ul>
        </div>
    )
}

export function Saluditos({title}) {
    console.log(title)
    return <h1>{title}</h1>
}