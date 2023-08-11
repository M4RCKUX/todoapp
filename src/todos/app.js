// Import app.html as raw text and store it in a variable named html.

import html from './app.html?raw';
import * as TodoStore from "../store/todo.store";
import * as UseCases from "./use-cases";

const ControlId = {
    TODO_LIST: '.todo-list',
    INPUT: '.new-todo',
    FILTER: '.filters',
    CLEAR: '.clear-completed',
    FILTERS: '.filters',
    PENDING_COUNT: '#pending-count',
    CLEAR_COMPLETED: '.clear-completed',
}

const Control = {
    TODO_LIST: null,
    INPUT: null,
    FILTER: null,
    CLEAR: null,
    FILTERS: null,
    PENDING_COUNT: null,
    CLEAR_COMPLETED: null,
}

const FilterHref = {
    ALL: '/',
    ACTIVE: '/active',
    COMPLETED: '/completed',
}

/**
 * @param {string} containerId
 */
export default function App(containerId) {

    const showTodos = () =>
    {
        // Get the current filter
        const filter = TodoStore.getFilter();
        // Get the todos
        const todos = TodoStore.getTodos(filter);
        // Display the todos
        UseCases.displayTodos(Control.TODO_LIST, todos);
        updatePendingCount()
    }

    const newTodo = (event) =>
    {
        // Get the description
        const description = event.target.value.trim();
        if (!description) {
            event.target.value = '';
            return;
        }
        // Create the todo
        UseCases.createTodo (description, Control.TODO_LIST);
        // Clear the input
        event.target.value = '';
        updatePendingCount();
        TodoStore.saveStore();
    }

    const deleteTodo = (id) => {
        UseCases.deleteTodo (id, Control.TODO_LIST);
        updatePendingCount();
        TodoStore.saveStore();
    }

    const toggleTodo = (id) => {
        UseCases.toggleTodo(id, Control.TODO_LIST);
        updatePendingCount();
    }

    const todoListClick = (event) => {
        const target = event.target;
        const id = target.parentElement.parentElement.dataset.id;
        if (target.classList.contains('destroy')) {
            deleteTodo (id);
        } else {
            toggleTodo (id);
        }
        TodoStore.saveStore();
    }

    const selectFilter = (event) => {
        // Get the last portion of the hash
        const hash = event.newURL.split('#')[1];
        switch (hash) {
            case FilterHref.COMPLETED:
                UseCases.filterTodos(Control.TODO_LIST, TodoStore.Filter.COMPLETED);
                break;
            case FilterHref.ACTIVE:
                UseCases.filterTodos(Control.TODO_LIST, TodoStore.Filter.PENDING);
                break;
            default:
                UseCases.filterTodos(Control.TODO_LIST, TodoStore.Filter.ALL);
        }
        Control.FILTERS.querySelectorAll('a').forEach(a => {
           a.classList.remove('selected');
        });
        const href = '#' + hash;
        Control.FILTERS.querySelector(`a[href="${href}"]`).classList.add('selected');

    }

    const updatePendingCount = () => {
        UseCases.countPendingTodos(Control.PENDING_COUNT);
    }

    const clearCompleted = () => {
        UseCases.deleteCompletedTodos(Control.TODO_LIST);
        updatePendingCount();
        TodoStore.saveStore();
    }


    // render the html in the container
    (() =>
    {
        // add the html to the container
        const app = document.querySelector(containerId);
        app.innerHTML = html;

        // Get the controls
        for (const id of Object.keys(ControlId)) {
            Control[id] = app.querySelector(ControlId[id]);
        }

        // Add event listeners
        Control.INPUT.addEventListener('change', newTodo);
        Control.TODO_LIST.addEventListener('click', todoListClick);
        window.addEventListener('hashchange', selectFilter);
        Control.CLEAR_COMPLETED.addEventListener('click', clearCompleted);

        // Initialize the app
        TodoStore.initStore();
        showTodos();

    })();
}