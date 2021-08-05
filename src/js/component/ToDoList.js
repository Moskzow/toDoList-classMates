import React from "react";
import { useState } from "react";

const ToDoList = () => {
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState("");

	const addTask = () => {
		if (task != "" && event.key === "Enter") {
			const newTodos = todos.concat({
				title: task,
				id: todos.length + 1
			});
			setTodos(newTodos);
		}
	};

	const deleteTask = todoId => {
		console.log(todoId);
		const newTodos2 = todos.filter(todo => todo.id !== todoId);
		setTodos(newTodos2);
	};

	return (
		<div>
			<h1 className="title">ToDo List</h1>
			<div className="contain">
				<div className="contain-input">
					<input
						type="text"
						value={task}
						placeholder="Whats needs to be done"
						onChange={e => setTask(e.target.value)}
						onKeyDown={addTask}
					/>
				</div>

				<div className="contain-ul">
					<ul>
						{todos.map(todo => {
							return (
								<li key={todo.id}>
									<span className="li-text">
										{todo.title}
									</span>
									<span
										className="button-delete"
										onClick={() => deleteTask(todo.id)}>
										<i className="fas fa-eraser"></i>
									</span>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ToDoList;
