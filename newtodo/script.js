document.addEventListener('DOMContentLoaded',()=>{
    const taskform =document.querySelector('#task_form')
    const taskInput = document.querySelector('#task_input')
    const taskList = document.querySelector('#task_list')
    const clearbtn = document.querySelector('#clear_task')

    taskform.addEventListener('submit',(e)=>{
        e.preventDefault()
        addTask(taskInput.value)
        taskInput.value = ''

    });
    taskList.addEventListener('click',(e)=>{
        if (e.target.tagName === 'BUTTON'){
            const taskitem = e.target.parentElement;
            taskList.removeChild(taskitem);
        }
        else if (e.target.tagName === 'LI'){
            e.target.classList.toggle('completed')
        }
    })
    clearbtn.addEventListener('click',(e)=>{
        const completedTasks = document.querySelectorAll('#task_list li.completed');
        completedTasks.forEach(task => taskList.removeChild(task));
    })

    function addTask(task) {
        if (task.trim() ==='') return

        const li = document.createElement('li')
        li.textContent = task
        const deletebutton = document.createElement('button')
        deletebutton.textContent = '×';
        li.appendChild(deletebutton);
        taskList.appendChild(li);

    }

})