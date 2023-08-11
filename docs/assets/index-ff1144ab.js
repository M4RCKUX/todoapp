var x=Object.defineProperty;var $=(t,e,o)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var T=(t,e,o)=>($(t,typeof e!="symbol"?e+"":e,o),o);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();const q=`<section class="todoapp">\r
    <header class="header">\r
        <h1>Tareas</h1>\r
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>\r
    </header>\r
\r
    <!-- This section should be hidden by default and shown when there are todos -->\r
    <section class="main">\r
        <input id="toggle-all" class="toggle-all" type="checkbox">\r
        <label for="toggle-all">Mark all as complete</label>\r
        <ul class="todo-list">\r
            <!-- These are here just to show the structure of the list items -->\r
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->\r
<!--             <li class="completed" data-id="abc">\r
                <div class="view">\r
                    <input class="toggle" type="checkbox" checked>\r
                    <label>Probar JavaScript</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Create a TodoMVC template">\r
            </li>-->\r
<!--             <li>\r
                <div class="view">\r
                    <input class="toggle" type="checkbox">\r
                    <label>Comprar un unicornio</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Rule the web">\r
            </li>-->\r
        </ul>\r
    </section>\r
\r
    <!-- This footer should hidden by default and shown when there are todos -->\r
    <footer class="footer">\r
        <!-- This should be "0 items left" by default -->\r
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>\r
        <!-- Remove this if you don't implement routing -->\r
        <ul class="filters">\r
            <li>\r
                <a class="selected filtro" class="selected" href="#/">Todos</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/active">Pendientes</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/completed">Completados</a>\r
            </li>\r
        </ul>\r
        <!-- Hidden if no completed items are left ↓ -->\r
        <button class="clear-completed">Borrar completados</button>\r
    </footer>\r
</section>\r
\r
\r
<footer class="info">\r
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\r
    <!-- Change this out with your name and url ↓ -->\r
    <p>Creado por <a href="http://todomvc.com">ti</a></p>\r
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>\r
</footer>`;let m;const V=new Uint8Array(16);function j(){if(!m&&(m=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!m))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return m(V)}const s=[];for(let t=0;t<256;++t)s.push((t+256).toString(16).slice(1));function G(t,e=0){return(s[t[e+0]]+s[t[e+1]]+s[t[e+2]]+s[t[e+3]]+"-"+s[t[e+4]]+s[t[e+5]]+"-"+s[t[e+6]]+s[t[e+7]]+"-"+s[t[e+8]]+s[t[e+9]]+"-"+s[t[e+10]]+s[t[e+11]]+s[t[e+12]]+s[t[e+13]]+s[t[e+14]]+s[t[e+15]]).toLowerCase()}const H=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),I={randomUUID:H};function J(t,e,o){if(I.randomUUID&&!e&&!t)return I.randomUUID();t=t||{};const r=t.random||(t.rng||j)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){o=o||0;for(let n=0;n<16;++n)e[o+n]=r[n];return e}return G(r)}class w{constructor(e,o=void 0,r=!1,n=void 0){T(this,"id");T(this,"description");T(this,"done");T(this,"createdAt");if(e==null||e==="")throw new Error("Description is required");this.id=o??J(),this.description=e,this.done=r,this.createdAt=n??new Date}}const u={ALL:"all",PENDING:"pending",COMPLETED:"completed"},l={todos:[],filter:u.ALL},v=()=>{D()},D=()=>{const t=localStorage.getItem("todo-store");if(t){const{todos:e=[],filter:o=u.ALL}=JSON.parse(t);l.todos=e.map(r=>new w(r.description,r.id,r.done,r.createdAt)),l.filter=o}},f=()=>{const t=JSON.stringify(l);console.log(l),localStorage.setItem("todo-store",t)},L=(t=u.ALL)=>{let e=[];switch(t){case u.ALL:e=l.todos;break;case u.PENDING:e=l.todos.filter(o=>!o.done);break;case u.COMPLETED:e=l.todos.filter(o=>o.done);break;default:throw new Error(`Invalid filter: ${t}`)}return[...e]},P=t=>{const e=new w(t);return l.todos.push(e),e},A=t=>l.todos.find(e=>e.id===t),N=t=>{const e=A(t);return e&&(e.done=!e.done),e},R=t=>{const e=A(t);return e&&(l.todos=l.todos.filter(o=>o.id!==t)),e},U=(t=u.ALL)=>{if(!Object.values(u).includes(t))throw new Error(`Invalid filter: ${t}`);l.filter=t},E=()=>l.filter,_=()=>{const t=l.todos.filter(e=>e.done);return l.todos=l.todos.filter(e=>!e.done),t.length},M=()=>l.todos.filter(t=>!t.done).length,B={initStore:v,loadStore:D,addTodo:P,toggleTodo:N,removeTodo:R,setFilter:U,getFilter:E,clearCompleted:_,getTodos:L,countPendingTodos:M},O=(t,e)=>{t.innerHTML="",e.forEach(o=>{const r=b(o);t.appendChild(r)})},b=t=>{const{id:e,description:o,done:r}=t,n=document.createElement("LI");return n.setAttribute("data-id",e),r&&n.classList.add("completed"),n.innerHTML=`
        <div class="view">
            <input type="checkbox"
                   class="toggle"
                   ${r?"checked":""}
            >
            <label>${o}</label>
            <button class="destroy"></button>
        </div>
    `,n},K=(t,e)=>{const o=P(t),r=b(o);e.appendChild(r)},Q=(t,e)=>{const o=N(t),r=e.querySelector(`[data-id="${t}"]`),n=b(o);e.replaceChild(n,r)},z=(t,e)=>{R(t);const o=e.querySelector(`[data-id="${t}"]`);e.removeChild(o)},y=(t,e)=>{U(e);const o=L(E());O(t,o)},W=t=>{const e=M();t.textContent=e.toString()},X=t=>{_();const e=L(E());O(t,e)},C={TODO_LIST:".todo-list",INPUT:".new-todo",FILTER:".filters",CLEAR:".clear-completed",FILTERS:".filters",PENDING_COUNT:"#pending-count",CLEAR_COMPLETED:".clear-completed"},c={TODO_LIST:null,INPUT:null,FILTER:null,CLEAR:null,FILTERS:null,PENDING_COUNT:null,CLEAR_COMPLETED:null},S={ALL:"/",ACTIVE:"/active",COMPLETED:"/completed"};function Y(t){const e=()=>{const d=E(),a=L(d);O(c.TODO_LIST,a),h()},o=d=>{const a=d.target.value.trim();if(!a){d.target.value="";return}K(a,c.TODO_LIST),d.target.value="",h(),f()},r=d=>{z(d,c.TODO_LIST),h(),f()},n=d=>{Q(d,c.TODO_LIST),h()},i=d=>{const a=d.target,g=a.parentElement.parentElement.dataset.id;a.classList.contains("destroy")?r(g):n(g),f()},p=d=>{const a=d.newURL.split("#")[1];switch(a){case S.COMPLETED:y(c.TODO_LIST,u.COMPLETED);break;case S.ACTIVE:y(c.TODO_LIST,u.PENDING);break;default:y(c.TODO_LIST,u.ALL)}c.FILTERS.querySelectorAll("a").forEach(F=>{F.classList.remove("selected")});const g="#"+a;c.FILTERS.querySelector(`a[href="${g}"]`).classList.add("selected")},h=()=>{W(c.PENDING_COUNT)},k=()=>{X(c.TODO_LIST),h(),f()};(()=>{const d=document.querySelector(t);d.innerHTML=q;for(const a of Object.keys(C))c[a]=d.querySelector(C[a]);c.INPUT.addEventListener("change",o),c.TODO_LIST.addEventListener("click",i),window.addEventListener("hashchange",p),c.CLEAR_COMPLETED.addEventListener("click",k),v(),e()})()}console.log("Todos is running!");B.initStore();Y("#app");
