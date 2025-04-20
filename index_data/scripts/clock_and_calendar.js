setInterval(displayTime, 1);
function displayTime() {
  if(localStorage.getItem("lang") == "en") {
    const timeNow = new Date();
    let hoursOfDay = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    let today = weekDay[timeNow.getDay()];
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    let tomonths = months[timeNow.getMonth()];
    let year = timeNow.getFullYear();
    hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let time =hoursOfDay + ":" + minutes + " ✧";
    document.getElementById("vartime").innerHTML = time;
    document.getElementById("vardate").innerHTML = " " + today + " " + tomonths + " " + year;
    document.getElementById("vardate").style.direction = "ltr";
  }else
  if(localStorage.getItem("lang") == "he") {
    const timeNow = new Date();
    let hoursOfDay = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let weekDay = ["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת","ראשון"]
    let today = weekDay[timeNow.getDay()];
    let months = ["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"]
    let tomonths = months[timeNow.getMonth()];
    let year = timeNow.getFullYear();
    hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let time =hoursOfDay + ":" + minutes + " ✧";
    document.getElementById("vartime").innerHTML = time;
    document.getElementById("vardate").innerHTML = " " + today + " " + tomonths + " " + year;
    document.getElementById("vardate").style.direction = "rtl";
  }else
  if(localStorage.getItem("lang") == "ru") {
    const timeNow = new Date();
    let hoursOfDay = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let weekDay = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"]
    let today = weekDay[timeNow.getDay()];
    let months = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]
    let tomonths = months[timeNow.getMonth()];
    let year = timeNow.getFullYear();
    hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let time =hoursOfDay + ":" + minutes + " ✧";
    document.getElementById("vartime").innerHTML = time;
    document.getElementById("vardate").innerHTML = " " + today + " " + tomonths + " " + year;
    document.getElementById("vardate").style.direction = "rtl";
  }
};