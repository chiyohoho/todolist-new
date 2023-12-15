function TaskList() {
    this.listNeedToDo = []
    this.listCompleted = []

    this.addToDoList = function (task) {
        this.addTask(task, this.listNeedToDo);
    }

    this.addToCompletedList = function (task) {
        this.addTask(task, this.listCompleted);
    }

    this.addTask = function (task, list) {
        list.push(task);
    }

    this.indexTask = function (task, list) {
        const index = list.findIndex(vitri => task === vitri);
        return index;
    }

    this.removeTask = function (task, list) {
        const taskNeedRemove = this.indexTask(task, list);
        if (taskNeedRemove >= 0) {
            list.splice(taskNeedRemove, 1);
        }
    }
}