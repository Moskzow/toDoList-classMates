import React from "react";
import { useState } from "react";
const ToDoList = () => {
	const [todos, setTodos] = useState(["hola", "adiós"]);

	return (
		<div>
			<ul>
				{todos.map(todo => {
					return <li key={todo}>{todo}</li>;
				})}
			</ul>
		</div>
	);
};
// {
// 	array.map(item => {
// 		return <div key={item.id}>I am one Object in the Array {item}</div>;
// 	});
// }

export default ToDoList;
