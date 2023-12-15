function Validation() {
    this.checkEmpty = (input, thongBao, content) => {
        if (input) {
            tbOOP.toggleThongBao(true, thongBao, content)
            return true
        } else {
            tbOOP.toggleThongBao(false, thongBao, content)
            return false
        }
    }

    this.checkDuplicate = (task, thongBao, content) => {
        const indexToDoList = newTask.listNeedToDo.findIndex(item => task === item)
        const indexCompletedList = newTask.listCompleted.findIndex(item => task === item)

        if (indexToDoList >= 0 || indexCompletedList >= 0) {
            tbOOP.toggleThongBao(false, thongBao, content)
            return false
        } else {
            tbOOP.toggleThongBao(true, thongBao, content)
            return true
        }

    }
}