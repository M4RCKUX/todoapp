import './style.css';

import App from "./src/todos/app";
import TodoStore from "./src/store/todo.store";


console.log('Todos is running!');

TodoStore.initStore();

App('#app');