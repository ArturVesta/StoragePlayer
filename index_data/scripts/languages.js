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
function locationReloadLang() {
  if(localStorage.getItem("lang") == "en") {
    if (confirm("Remove default language? page will reload if confirm.")) {
      window.location.reload();
      document.documentElement.setAttribute('lang', 'none');
      localStorage.setItem("lang", "");
    }else{
      return false;
    }
  }else
  if(localStorage.getItem("lang") == "he") {
    if (confirm("להסיר את שפת ברירת המחדל? הדף ייטען מחדש אם תאשר.")) {
      window.location.reload();
      document.documentElement.setAttribute('lang', 'none');
      localStorage.setItem("lang", "");
    }else{
      return false;
    }
  }else
  if(localStorage.getItem("lang") == "ru") {
    if (confirm("Удалить язык по умолчанию? Страница перезагрузится при подтверждении.")) {
      window.location.reload();
      document.documentElement.setAttribute('lang', 'none');
      localStorage.setItem("lang", "");
    }else{
      return false;
    }
  }
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