// Import app.html as raw text and store it in a variable named html.

import html from './app.html?raw';

/**
 * @param {string} containerId
 */
export default function App(containerId) {
    (() => {
        const app = document.querySelector(containerId);
        app.innerHTML = html;
    })();
}