import React from "react";
import { useState } from "react";

const ToDoList = () => {
	const [todos, setTodos] = useState([
		{ title: "hola", id: 1 },
		{ title: "adios", id: 2 }
	]);

	const [task, setTask] = useState("");

	const addTask = () => {
		const newTodos = todos.concat({ title: task, id: todos.length + 1 });
		setTodos(newTodos);
	};

	const deleteTask = id => {
		const newTask = todos.filter(todo => todo.id !== id);
		setTodos(NewTask);
	};

	return (
		<div>
			<input
				type="text"
				value={task}
				onChange={e => setTask(e.target.value)}
			/>
			<button onClick={addTask}>Add</button>

			<ul>
				{todos.map(todo => {
					return (
						<li key={todo.id}>
							{todo.title}
							<button onClick={deleteTask(todos.id)}>
								Delete
							</button>
						</li>
					);
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
