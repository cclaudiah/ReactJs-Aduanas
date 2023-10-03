import './tareas.css'

export function Tareas({flag}) {

    {/*antes de usar el css se usa asi
    const cardsStyles = {background: "#202020", color: "#fff", padding: '20px'}

    const tittleStyles = {fontWeight: "lighter"}

    return <div style={cardsStyles}>
        <h1 style={tittleStyles}>Mis Tareas</h1>
        <p>Tarea Realizada</p>
    </div> */}

    return <div className='card'>
        <h1>Mis Tareas</h1>

        {/* antes de usar el css
        <span style={flag ? {background:'green'} : {background:'red'}}>
            {flag ? 'Tarea realizada' : 'Tarea pendiente'}
        </span> */}

        <span className={flag ? "bg-green" : "bg-red"}>
            {flag ? 'Tarea realizada' : 'Tarea pendiente'}
        </span>
    </div>
}