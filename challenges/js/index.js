const container = document.getElementById('container');

let tasks = [
    { title: 'Leer', done: false },
    { title: 'Programar', done: false },
    { title: 'Ir de compras', done: false },
    { title: 'Clases de manejo', done: false },
]

tasks.forEach(task => {
    container.innerHTML +=
    `<li>
        ${task.title}}
        <input 
        class='container-checkbox' 
        type='checkbox' 
        ${task.done === false ? 'not-checked' : 'checked'} 
        name='${task.title}'
        />
    </li>`
})