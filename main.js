const callEle = id => { return document.getElementById(id) }

let inputNeedToDo = callEle('input_needtodo')
const addBtn = callEle('btn_add')
const validation = new Validation()
const newTask = new TaskList()
const tbOOP = new ThongBao()

const setLocalStorage = (list, key) => {
    localStorage.setItem(key, JSON.stringify(list))
}

const addToDoList = () => {
    let needToDo = inputNeedToDo.value;
    let isValid = false
    isValid = validation.checkEmpty(needToDo, 'thongbao', 'Vui lòng nhập 1 công việc bất kỳ') && validation.checkDuplicate(needToDo, 'thongbao', 'Công việc này đã tồn tại')

    setTimeout(() => {
        tbOOP.hideTB('thongbao')
    }, 3000)

    if (isValid) {
        inputNeedToDo.value = ''
        newTask.addToDoList(needToDo)
        showToDoListUI(newTask.listNeedToDo)
        setLocalStorage(newTask.listNeedToDo, 'TODOLIST')
    }
}
addBtn.addEventListener('click', addToDoList)

const showToDoListUI = (todolist) => {
    let str = ``

    if (todolist.length >= 1) {
        todolist.map(task =>
            str += `
            <li style="list-style: none;">
                <span>${task}</span>
                <div class="buttons">
                    <span onclick="removeTaskToDoList('${task}')" id="remove"><i class="fa-solid fa-trash-can remove_icon"></i></span>
                    <span onclick="addToCompletedList('${task}')" id="btncompleted"><i class="fa-regular fa-circle-check"></i></span>
                </div>
            </li>
            `
        )
    } else {
        str = `
        <li class="show_thongbao" id="tb_completed"
                        style="border: none; display: flex; align-items: center;justify-content: center;">
                        <span id="tb_todolist" style="font-weight: bolder;"></span>
        </li>
        `
    }
    callEle('need_to_do').innerHTML = str
}

const showCompletedListUI = (completed) => {
    let str = ``

    if (completed.length >= 1) {
        completed.map(task =>
            str += `
                <li style="list-style: none;">
                    <span>${task}</span>
                    <span id="nothingtodo"></span>
                    <div class="buttons">
                        <span onclick="removeTaskCompletedList('${task}')" id="removecompleted"><i class="fa-solid fa fa-eraser remove_icon"></i></span>
                        <span id="btncompletedlist"><i class="fa-regular fa-circle-check"></i></span>
                    </div>
                </li>
                    `
        )
    } else {
        str = `
        <li class="show_thongbao" id="tb_todolist"
            style="border: none; display: flex; align-items: center;justify-content: center;">
            <span id="tb_completedlist" style="font-weight: bolder;"></span>
        </li>
        `
    }
    callEle('completedlist').innerHTML = str
}

const removeTaskToDoList = (task) => {
    newTask.removeTask(task, newTask.listNeedToDo)
    showToDoListUI(newTask.listNeedToDo)
    setLocalStorage(newTask.listNeedToDo, 'TODOLIST')
    tbOOP.changeThongBao(newTask.listNeedToDo, newTask.listCompleted)

}

const addToCompletedList = (task) => {
    newTask.removeTask(task, newTask.listNeedToDo)
    showToDoListUI(newTask.listNeedToDo)
    setLocalStorage(newTask.listNeedToDo, 'TODOLIST')

    newTask.addToCompletedList(task)
    showCompletedListUI(newTask.listCompleted)
    setLocalStorage(newTask.listCompleted, 'COMPLETEDLIST')

    tbOOP.changeThongBao(newTask.listNeedToDo, newTask.listCompleted)

}

const removeTaskCompletedList = (task) => {
    newTask.removeTask(task, newTask.listCompleted)
    showCompletedListUI(newTask.listCompleted)
    setLocalStorage(newTask.listCompleted, 'COMPLETEDLIST')

    newTask.addToDoList(task)
    showToDoListUI(newTask.listNeedToDo)
    setLocalStorage(newTask.listNeedToDo, 'TODOLIST')

    tbOOP.changeThongBao(newTask.listNeedToDo, newTask.listCompleted)

}

const getLocalStorage = () => {
    let ToDoList = localStorage.getItem('TODOLIST') ? JSON.parse(localStorage.getItem('TODOLIST')) : []
    let CompletedList = localStorage.getItem('COMPLETEDLIST') ? JSON.parse(localStorage.getItem('COMPLETEDLIST')) : []
    newTask.listNeedToDo = ToDoList
    newTask.listCompleted = CompletedList
    showToDoListUI(newTask.listNeedToDo)
    showCompletedListUI(newTask.listCompleted)
    tbOOP.changeThongBao(newTask.listNeedToDo, newTask.listCompleted)
}
getLocalStorage()

