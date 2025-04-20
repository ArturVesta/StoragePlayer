function oneModeuse() {
  if(localStorage.getItem("lang") == "en") {
    if (confirm("Set page to «One Use» mode?") == true) {
      document.getElementById("msgtext").innerHTML = "The page will not be available after reload the page.<br>You can remove from the link &#171;#OneUse&#187; for return the page to repeatability.<br>And you can press on back for exit from &#171;OneUse&#187;.";
      oneUseMode();
    }else{
      document.getElementById("msgtext").innerHTML = "you refused the &#171;One Use&#187; mode.";
      oneUseModeRefused();
    }
  }else
  if(localStorage.getItem("lang") == "he") {
    if (confirm("להגדיר את הדף למצב «שימוש אחד»?") == true) {
      document.getElementById("msgtext").innerHTML = "הדף לא יהיה זמין לאחר טעינה מחדש.<br>אתה יכול להסיר מהקישור &#171;#OneUse&#187; כדי להחזיר את הדף לחזרות.<br>ואתה יכול ללחוץ על חזור ליציאה מ&#171;שימוש אחד&#187;.";
      oneUseMode();
    }else{
      document.getElementById("msgtext").innerHTML = "סירבת למצב &#171;שימוש אחד&#187;.";
      oneUseModeRefused();
    }
  }else
  if(localStorage.getItem("lang") == "ru") {
    if (confirm("Установить страницу в режим «Одноразового использования»?") == true) {
      document.getElementById("msgtext").innerHTML = "Страница будет недоступна после перезагрузки.<br>Вы можете удалить от ссылку &#171;#OneUse&#187; чтобы вернуть страницу к повторяемости.<br>И вы можете нажать кнопку Назад, чтобы выйти из &#171;Одноразовое использование&#187;.";
      oneUseMode();
    }else{
      document.getElementById("msgtext").innerHTML = "Вы отказались от режима &#171;Одноразового использования&#187;.";
      oneUseModeRefused();
    }
  }
};