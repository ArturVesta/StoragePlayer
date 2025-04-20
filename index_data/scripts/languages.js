function activeSelect() {
  document.getElementById("selectOptions").classList.toggle("show");
}
function langCheck() {
  if(localStorage.getItem("lang") == "en") {
    document.getElementById("enLang").click();
  }else
  if(localStorage.getItem("lang") == "ru") {
    localStorage.setItem("lang", "ru");
    document.getElementById("ruLang").click();
  }else
  if(localStorage.getItem("lang") == "he") {
    document.getElementById("heLang").click();
  }
};
var langmodal = document.getElementById("firstLangModal");
function runLangOnStartFalse() {
  if(localStorage.getItem("lang") == "en") {
    langmodal.style.left = "-100%";
    document.body.style.overflowY = "auto";
  }else
  if(localStorage.getItem("lang") == "ru") {
    langmodal.style.left = "-100%";
    document.body.style.overflowY = "auto";
  }else
  if(localStorage.getItem("lang") == "he") {
    langmodal.style.left = "-100%";
    document.body.style.overflowY = "auto";
  }else{
    runLangOnStartTrue();
  }
}
function runLangOnStartTrue() {
  langmodal.style.left = "0%";
  document.body.style.overflowY = "hidden";
};
function confirmLang() {
  if(localStorage.getItem("lang") == "en") {
    runLangOnStartFalse();
  }else
  if(localStorage.getItem("lang") == "he") {
    runLangOnStartFalse();
  }else
  if(localStorage.getItem("lang") == "ru") {
    runLangOnStartFalse();
  }
};
function firstLanguage() {
  if(localStorage.getItem("lang") == "en") {
    runLangOnStartFalse();
  }else
  if(localStorage.getItem("lang") == "he") {
    runLangOnStartFalse();
  }else
  if(localStorage.getItem("lang") == "ru") {
    runLangOnStartFalse();
  }else{
    runLangOnStartTrue();
  }
}