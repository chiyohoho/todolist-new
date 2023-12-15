const callElement = (id) => { return document.querySelector(id) }
const showTime = () => {
    const now = new Date();
    const dayOfWeek = now.toLocaleDateString("vi-VN", { weekday: 'long' });
    const dayOfMonth = now.getDate();
    const month = now.toLocaleDateString("vi-VN", { month: 'long' });
    const year = now.getFullYear();

    callElement('#show_date').innerHTML = `${dayOfWeek} ngày ${dayOfMonth} ${month} năm ${year}`;
}
showTime()