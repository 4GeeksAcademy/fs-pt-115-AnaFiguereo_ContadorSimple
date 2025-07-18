import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";	
import { Number } from "./Number";
//create your first component

const Home = ({counter}) => {
	return (
		<div className="bg-black d-flex justify-content-center">
			<Number number={counter}/>
			<Number number={counter}/>
			<Number number={counter}/>
			<Number number={counter}/>
		</div>
	);
};

export default Home;