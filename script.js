window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const tasksContainer = document.querySelector('#tasks-container');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const task = input.value;
        if (!task) {
            alert('Please fill out the task');
            return;
        }

        const task_el = document.createElement('div');
        task_el.classList.add('tasks');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('text'); 
        task_content_el.innerText = task;

        const task_input_el = document.createElement('input');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerHTML = 'edit';

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('Delete'); 
        task_delete_el.innerHTML = 'delete';

        // Append elements to their respective parents
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);
        task_el.appendChild(task_content_el);
        task_el.appendChild(task_actions_el);
        tasksContainer.appendChild(task_el);
    });
});