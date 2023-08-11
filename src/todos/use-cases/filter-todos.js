import * as TodoStore from "../../store/todo.store";
import {displayTodos} from "./display-todos.js";

/**
 * Filter todos
 * @param {HTMLUListElement} todoList
 * @param {string} filter
 */
export const filterTodos = (todoList, filter) => {
    TodoStore.setFilter (filter);
    const todos = TodoStore.getTodos(TodoStore.getFilter());
    displayTodos(todoList, todos);
}