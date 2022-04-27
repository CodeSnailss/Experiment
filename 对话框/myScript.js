function show() {
    var now = new Date();
    var hour = now.getHours();//得到小时数
    var minute = now.getMinutes();//得到分钟数
    var showTime = hour + ((minute < 10) ? ":0" : ":") + minute;
    document.getElementById("clock").value = showTime;
}
setInterval("show()", 1000);