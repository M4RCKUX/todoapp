import * as TodoStore from "../../store/todo.store";

/**
 * Count pending todos and display the result
 * @param {HTMLSpanElement} pendingCount
 */
export const countPendingTodos = (pendingCount) => {
    const nPending = TodoStore.countPendingTodos();
    pendingCount.textContent = nPending.toString();
}