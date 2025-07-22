import React from 'react'
import ReactDOM from 'react-dom/client'
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
let unitSecond = 0
let dozenSecond = 0
// setInterval es una funcion de la cual  por cada intervalo de tiempo se va a ejecutar lo que le pongamos
// en este caso sería una función


setInterval ( ()=>{
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Home unitSecond={unitSecond} dozenSecond={dozenSecond}/>  {/* Conectamos el componente Home aquí a main para que salga en la ventana*/}
    </React.StrictMode>,
  )
  unitSecond ++ ; {/* Supongo que aquí habrá que poner el límite de 9 segundos y que pase al siguiente number.jsx */}
  if (unitSecond >=10) {
    dozenSecond++
  }
}, 1000)

//Vamos a definir por fin esa constante que hemos estado mencionando todo el tiempo (counter)
//Antes le hemos puesto const porque no queremos que "la estructura" no cambie pero ahora le ponemos let por si luego queremos
//cambiar el valor

//interval = segun el intervalo de tiempo se ejecuta

