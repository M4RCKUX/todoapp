import * as TodoStore from "../../store/todo.store";

/**
 * Delete a todo
 * @param {string} id
 * @param {HTMLUListElement} todoList
 */
export const deleteTodo = (id, todoList) => {
    TodoStore.removeTodo (id);
    const li = todoList.querySelector(`[data-id="${id}"]`);
    todoList.removeChild(li);
}