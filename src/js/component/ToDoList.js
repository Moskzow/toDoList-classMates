import React from "react";
import { useState } from "react";
<script
	src="https://kit.fontawesome.com/b675d79ae8.js"
	crossorigin="anonymous"></script>;

const ToDoList = () => {
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState("");

	const addTask = () => {
		if (task != "") {
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
			<h1 className="title">todos</h1>
			<div className="contain">
				<div className="contain-input">
					<input
						type="text"
						value={task}
						placeholder="Whats needs to be done"
						onChange={e => setTask(e.target.value)}
					/>
					<button className="btn btn-primary" onClick={addTask}>
						Add
					</button>
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
										<i class="fas fa-times button-delete"></i>
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
