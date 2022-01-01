

document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert(" Please enter a task")
        //adding a task
    } else {
        document.querySelector('#tasks').innerHTML += `
            <div div class="task" >
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                <i class="far fa-trash-alt"></i>
                </button>
            </div >
            `;
        //deleting a task
        let current_tasks = document.querySelectorAll(".delete");
        for (let i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            };

        }
        //crossing out a completed task
        let tasks = document.querySelectorAll(".task");
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function () {
                this.classList.toggle('completed');
            };

        }

    }
}