function ThongBao() {
    this.fixContentThongBao = function (id, content) {
        const thongBao = callEle(id)
        thongBao.innerHTML = content
    }

    this.hideTB = (thongBao) => {
        const thongBaoElement = callEle(thongBao);
        thongBaoElement.style.display = 'none';
    }

    this.toggleThongBao = (dieuKien, thongBao, content) => {
        const thongBaoElement = callEle(thongBao);
        if (dieuKien) {
            thongBaoElement.innerHTML = 'Đã thêm thành công';
            thongBaoElement.style.color = 'green';
        } else {
            thongBaoElement.innerHTML = content;
            thongBaoElement.style.color = 'red';
        }
        thongBaoElement.style.display = 'block';
    }

    this.changeThongBao = (todolist, completedlist) => {
        if (todolist.length === 0 && completedlist.length === 0) {
            tbOOP.fixContentThongBao('tb_todolist', 'Bạn hiện không có việc gì cần làm')
            tbOOP.fixContentThongBao('tb_completedlist', 'Bạn chưa hoàn thành công việc nào')
        } else if (todolist.length === 0 && completedlist.length > 0) {
            tbOOP.fixContentThongBao('tb_todolist', 'Bạn đã hoàn thành tất cả công việc')
            tbOOP.fixContentThongBao('tb_completedlist', 'Bạn chưa hoàn thành công việc nào')
        } else if (todolist.length > 0 && completedlist.length === 0) {
            tbOOP.fixContentThongBao('tb_todolist', 'Bạn hiện không có việc gì cần làm')
            tbOOP.fixContentThongBao('tb_completedlist', 'Bạn chưa hoàn thành công việc nào')
        }
    }
}