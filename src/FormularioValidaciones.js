import React,  {useState} from "react";

export const FormularioValidaciones = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState(''); 
    const [asunto, setAsunto] = useState(''); 
    const [mensaje, setMensaje] = useState(''); 
    const [genero, setGenero] = useState(''); 
    const [error, setError] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();

        //validar nombre vacio
        setError('');
        if(nombre.trim() === ''){
            setError('Ingrese nombre')
            return;
        }

        //valida email
        //mail@nomdominio.dominio
        // ^: Inicio de la cadena de texto
        // [^\s@: uno o mas carascteres no son espacios en blanco ni @
        // \. : punto
        // $ : Final de la cadena
        const emailRegex = /^[^s@]+@[^\s@]+\.[^\s@]+$/
        if(!emailRegex.test(email)){
            setError('ingresar mail valido')
            return;
        }

        // validar asunto maax 150

        if(asunto.trim() === '' || asunto.length>15){
            setError('El asunto no debe exceder 150');
            return;
        }

        // validar mensaje maax 1000

        if(mensaje.trim() === '' || mensaje.length>10){
            setError('El mensaje no debe exceder 1000s');
            return;
        }

        //si todas las validciones pasan
        console.log('datos form', {nombre,email,asunto,mensaje,genero})
        setError('');
    }

    return(
        <div className="container">
            <h2>Formulario de contacto</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="label" htmlFor="nombre">Nombre:</label>
                    <input 
                        className="input" 
                        type="text"
                        id="" 
                        name="nombre" 
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)} 
                    />
                </div>

                <div className="form-group">
                    <label className="label" htmlFor="email">Email:</label>
                    <input 
                        className="input" 
                        type="text"
                        id="email" 
                        name="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>

                <div className="form-group">
                    <label className="label" htmlFor="asunto">Asunto:</label>
                    <input 
                        className="input" 
                        type="text"
                        id="asunto" 
                        name="asunto" 
                        value={asunto} 
                        onChange={(e) => setAsunto(e.target.value)} 
                    />
                </div>

                <div className="form-group">
                    <label className="label" htmlFor="mensaje">Mensaje:</label>
                    <textarea 
                        className="input" 
                        type="text"
                        id="mensaje" 
                        name="mensaje" 
                        value={mensaje} 
                        onChange={(e) => setMensaje(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="genero">Genero:</label>
                    <select 
                        className="input"
                        id="genero" 
                        name="genero" 
                        value={genero} 
                        onChange={(e) => setGenero(e.target.value)}>
                            <option value="">Selecciones:</option>
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                            <option value="O">Otro</option>
                    </select>
                </div>

                {error && <div className="error">{error}</div>}
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}