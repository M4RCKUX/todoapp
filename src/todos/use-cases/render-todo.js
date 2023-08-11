import { Todo } from "../models/todo.model";
/**
 * Render a todo
 * @param {Todo} todo
 * @returns {HTMLLIElement}
 */
export const renderTodo = (todo) => {
    const { id, description, done } = todo;
    const li = document.createElement('LI');
    li.setAttribute('data-id', id);
    if(done)
        li.classList.add('completed');
    li.innerHTML =(`
        <div class="view">
            <input type="checkbox"
                   class="toggle"
                   ${done ? 'checked' : ''}
            >
            <label>${description}</label>
            <button class="destroy"></button>
        </div>
    `);
    return li;
}