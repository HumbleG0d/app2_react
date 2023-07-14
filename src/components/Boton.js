export function Boton({texto , isBotonClick , manejarClick}) {
    return (
        <button className={isBotonClick ? 'boton-clic' : 'boton-reiniciar'} onClick={manejarClick}>
            {texto}
        </button>
    )
}