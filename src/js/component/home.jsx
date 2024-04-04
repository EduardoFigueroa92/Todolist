import React, { useState }from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ inputValue, setInputValue ] = useState("")
	const [ Todolist, setTodolist ] = useState([])
	return (
		<div className="container">
			<h1>Lista de tareas pendientes</h1>
				<ul>
					<li id="sinPunto">
						<input type="text" 
						onChange= {(e) => setInputValue (e.target.value)}
						value={inputValue}
						onKeyUp={(e) => {
							if (e.key === "Enter"){ setTodolist(Todolist.concat([inputValue]));
								setInputValue("")}
							}}
						placeholder="Tareas pendientes"></input>
					</li>
					{Todolist.map((item,index) =>
					<li>
						{item}    <i className="fas fa-trash-alt" onClick={() => setTodolist(Todolist.filter((t,currentIndex)=> index != currentIndex))}></i>
					</li>
					)}
			</ul>
			<div>{Todolist.length} tareas</div>
		</div>
	);
};

export default Home;
