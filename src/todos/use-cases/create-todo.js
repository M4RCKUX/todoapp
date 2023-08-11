import {addTodo} from "../../store/todo.store";
import {renderTodo} from "./";

/**
 * Create a todo, add it to the store and display it
 * @param {string} description
 * @param {HTMLUListElement} todoList
 */
export const createTodo = (description, todoList) => {
    const todo = addTodo(description);
    // display the todo
    const li = renderTodo (todo);
    todoList.appendChild(li);
}