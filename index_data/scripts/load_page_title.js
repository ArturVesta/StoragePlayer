function loadTitle() {
  if(localStorage.getItem("lang") == "en") {
    document.title = "Storage Player";
  }else
  if(localStorage.getItem("lang") == "he") {
    document.title = "נגן אחסון";
  }else
  if(localStorage.getItem("lang") == "ru") {
    document.title = "Проигрыватель памяти";
  }
  document.getElementById("title").innerHTML = document.title;
};