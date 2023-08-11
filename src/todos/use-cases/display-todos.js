import { Todo } from "../models/todo.model";
import { renderTodo } from "./";

/**
 *
 * @param {HTMLUListElement} todoList
 * @param {array<Todo>} todos
 */
export const displayTodos = (todoList, todos) => {
    // clear the container
    todoList.innerHTML = '';
    // render the todos
    todos.forEach(todo => {
       // Create the li element
         const li = renderTodo (todo);
         todoList.appendChild(li);
    });
}