import * as TodoStore from "../../store/todo.store";
import * as UseCases from "./";

export const deleteCompletedTodos = (todoList) => {
    TodoStore.clearCompleted();
    const todos = TodoStore.getTodos(TodoStore.getFilter());
    UseCases.displayTodos(todoList, todos);
}