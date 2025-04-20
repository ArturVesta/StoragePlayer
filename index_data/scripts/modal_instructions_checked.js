function displayAutoModal() {
  var toggletext = document.getElementById("amText");
  if(localStorage.getItem("automodal") === "false") {
    document.getElementById("autoModal").classList.add("dont-show-auto");
    document.getElementById("autoMOdalChecker").checked = false;
    if(localStorage.getItem("lang") == "en") {
      toggletext.innerHTML = "OFF";
    }else
    if(localStorage.getItem("lang") == "he") {
      toggletext.innerHTML = "כבוי";
    }else
    if(localStorage.getItem("lang") == "he") {
      toggletext.innerHTML = "ВЫК";
    }
    document.body.style.overflowY = "auto";
  }else{
    document.getElementById("autoModal").classList.remove("dont-show-auto");
    document.getElementById("autoMOdalChecker").checked = true;
    if(localStorage.getItem("lang") == "en") {
      toggletext.innerHTML = "ON";
    }else
    if(localStorage.getItem("lang") == "he") {
      toggletext.innerHTML = "דלוק";
    }else
    if(localStorage.getItem("lang") == "he") {
      toggletext.innerHTML = "ВКЛ";
    }
    document.body.style.overflowY = "hidden";
  }
}