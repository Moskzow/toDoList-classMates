import React from "react";
import { useState } from "react";
const ToDoList = () => {
	const [todos, setTodos] = useState([
		{ title: "hola", id: 1 },
		{ title: "adios", id: 2 }
	]);

	const [task, setTask] = useState("");

	return (
		<div>
			<input
				type="text"
				value={task}
				onChange={e => setTask(e.target.value)}
			/>

			<ul>
				{todos.map(todo => {
					return <li key={todo.id}>{todo.title}</li>;
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
