function checkFuncAuto(){
  var toggletext = document.getElementById("amText");
  if (document.getElementById("autoMOdalChecker").checked === true) {
    document.documentElement.setAttribute('instruntion', 'autostart-on');
    localStorage.setItem("automodal", "true");
    if(localStorage.getItem("lang") == "en") {
      toggletext.innerHTML = "ON";
    }else
    if(localStorage.getItem("lang") == "he") {
      toggletext.innerHTML = "דלוק";
    }else
    if(localStorage.getItem("lang") == "ru") {
      toggletext.innerHTML = "ВКЛ";
    }
  } else {
    document.documentElement.setAttribute('instruntion', 'autostart-off');
    localStorage.setItem("automodal", "false");
    if(localStorage.getItem("lang") == "en") {
      toggletext.innerHTML = "OFF";
    }else
    if(localStorage.getItem("lang") == "he") {
      toggletext.innerHTML = "כבוי";
    }else
    if(localStorage.getItem("lang") == "ru") {
      toggletext.innerHTML = "ВЫК";
    }
  }
};