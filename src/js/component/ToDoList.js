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

	const deleteTask = todoId => {
		console.log(todoId);
		const newTodos2 = todos.filter(todo => todo.id !== todoId);
		setTodos(newTodos2);
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
							<button onClick={() => deleteTask(todo.id)}>
								Delete
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ToDoList;
