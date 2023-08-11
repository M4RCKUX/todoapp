import * as TodoStore from "../../store/todo.store";
import {renderTodo} from "./";

/**
 * Toggle a todo
 * @param {string} id
 * @param {HTMLUListElement} todoList
 */
export const toggleTodo = (id, todoList) => {
    const todo = TodoStore.toggleTodo (id);
    const oldLi = todoList.querySelector(`[data-id="${id}"]`);
    const newLi = renderTodo (todo);
    todoList.replaceChild(newLi, oldLi);
}