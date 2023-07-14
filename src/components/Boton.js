import '../stylesheets/Boton.css'

export function Boton({texto , isBotonClick , manejarClick}) {
    return (
        <button className={isBotonClick ? 'boton-click' : 'boton-reiniciar'} onClick={manejarClick}>
            {texto}
        </button>
    )
}