import './normalize.css'
import './App.css'
import './components/Boton'
import { Boton } from './components/Boton'
import { Contador } from './components/Contador'
import { useState } from 'react'

function App() {

    const [numClicks , setNumClicks] = useState(0)

    const manejarClick = () => {
        setNumClicks(numClicks + 1)
    }

    const reiniciarContador = () => {
        setNumClicks(0)
    }

    return (
        <div className="App">
            <div className='contador'>
                <h1 className='title__contenedor'>Contador de click</h1>
            </div>

            <div className='contenedor-principal'>
                <Contador
                    numClick = {numClicks}
                />
                <Boton
                    texto = 'click'
                    isBotonClick = {true}
                    manejarClick={manejarClick}
                />

                <Boton
                    texto = 'reiniciar'
                    isBotonClick = {false}
                    manejarClick={reiniciarContador}
                />
                
            </div>
        </div>
    )
}

export default App
