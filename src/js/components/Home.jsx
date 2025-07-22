import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";	
import { Number } from "./Number";
//create your first component
//Creamos una variable  donde le daremos un parámetro
//Ese parámetro será algo que nosotros definiremos o ya lo habremos definido
//Haremos que ese valor que tenemos haga algo con ello
//En este caso le decimos que nos devuelva un contenedor con 4 componentes (en este caso el mismo, pero puedes poner cualquiera)
//Un componente es como hacer un div en html, básicamente una parte del html
const Home = ({unitSecond, dozenSecond, unitMinute, dozenMinute}) => {
	return (
		<div className="bg-black d-flex justify-content-center">
			<Number number={dozenMinute}/> {/* Aqui estoy diciendo que en el componente number hay un parámetro para recibir   */}
			<Number number={unitMinute}/> {/* que le hemos llamado number (porque le vamos a pasar un número)   */}
			<Number number={":"}/>
			<Number number={dozenSecond}/>
			<Number number={unitSecond}/>
		</div>
	);
};

export default Home; //Lo exportamos para que lo reciba main