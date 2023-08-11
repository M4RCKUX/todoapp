import { Todo } from '../todos/models/todo.model';

// Filter Enumeration
export const Filter = {
    ALL: 'all',
    PENDING: 'pending',
    COMPLETED: 'completed',
}

const state = {
    /**
     * @type {array<Todo>}
     */
    todos: [
    ],
    /**
     * @type {string}
     */
    filter: Filter.ALL,
}

export const initStore = () => {
    loadStore();
};

const loadStore = () => {
    // load the state from local storage
    const json = localStorage.getItem('todo-store');
    if (json) {
        const {todos = [], filter = Filter.ALL} = JSON.parse(json);
        state.todos = todos.map(todo => new Todo(
            todo.description,
            todo.id,
            todo.done,
            todo.createdAt,
        ));
        state.filter = filter;
    }
}

export const saveStore = () => {
    // save the state to local storage
    const json = JSON.stringify(state);
    console.log(state);
    localStorage.setItem('todo-store', json);
}

/**
 *
 * @param {string} filter
 * @returns {array<Todo>}
 */
export const getTodos = (filter= Filter.ALL) => {
    let result = [];
    switch (filter) {
        case Filter.ALL:
            result = state.todos;
            break;
        case Filter.PENDING:
            result = state.todos.filter(todo => !todo.done);
            break;
        case Filter.COMPLETED:
            result = state.todos.filter(todo => todo.done);
            break;
        default:
            throw new Error(`Invalid filter: ${filter}`);
    }
    // Return a copy of result in order to avoid mutation of state.todos
    return [...result];
}

/**
 * add a new todo with the given description
 * and return it
 * @param {string} description
 * @returns {Todo}
 */
export const addTodo = (description) => {
    const todo = new Todo(description);
    state.todos.push(todo);
    return todo;
}

/**
 * get the todo with the given id
 * if the todo is not found, return undefined
 * @param {string} id
 * @returns {Todo | undefined}
 */
export const getTodo = (id) => {
    return state.todos.find(todo => todo.id === id);
}

/**
 * toggle the done status of a todo
 * and return it
 * if the todo is not found, return undefined
 * @param {string} id
 * @returns {Todo | undefined}
 */
export const toggleTodo = (id) => {
    const todo = getTodo(id);
    if (todo) {
        todo.done = !todo.done;
    }
    return todo;
}

/**
 * remove a todo with the given id and return it
 * if the todo is not found, return undefined
 * @returns {Todo | undefined}
 */
export const removeTodo = (id) => {
    const todo = getTodo(id);
    if (todo) {
        state.todos = state.todos.filter(todo => todo.id !== id);
    }
    return todo;
}

/**
 * set the current filter
 * @param {string} filter
 * @returns {void}
 * @throws {Error} if the filter is invalid
 */
export const setFilter = (filter= Filter.ALL) => {
    // validation
    if (!Object.values(Filter).includes(filter)) {
        throw new Error(`Invalid filter: ${filter}`);
    }
    state.filter = filter;
}

/**
 * Get the current filter
 * @returns {string}
 */
export const getFilter = () => {
    return state.filter;
}

/**
 * remove all completed todos
 * and return the number of removed todos
 * @returns {number}
 */
export const clearCompleted = () => {
    const completedTodos = state.todos.filter(todo => todo.done);
    state.todos = state.todos.filter(todo => !todo.done);
    return completedTodos.length;
}

/**
 * count the pending todos
 * @returns {number}
 */
export const countPendingTodos = () => {
    return state.todos.filter(todo => !todo.done).length;
}

export default {
    initStore,
    loadStore,
    addTodo,
    toggleTodo,
    removeTodo,
    setFilter,
    getFilter,
    clearCompleted,
    getTodos,
    countPendingTodos,
};