import React, {useState} from "react";

export function EstadoFuncional(){
    const [nombre, setNombre] = useState('Claudia');

    //a medida que escribe se actualiza el nombre
    const handleChangeNombre = (e) => {
        setNombre(e.target.value)
    }

    return(
        <div>
            <h1>Hola, {nombre}</h1>

            <input type="text" value={nombre} onChange={handleChangeNombre}></input>
        </div>
    )
}