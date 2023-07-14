import '../stylesheets/Contador.css'

export function Contador({numClick}) {
    return (
        <div className='contador_click'>
            {numClick}
        </div>
    )
}