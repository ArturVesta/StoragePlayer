function locationReload() {
  if(localStorage.getItem("lang") == "en") {
    if (confirm("Reload the «Storage Player»?")) {
      window.location.reload();
    }else{
      return false;
    }
  }else
  if(localStorage.getItem("lang") == "he") {
    if (confirm("לרענן מחדש את «נגן האחסון»?")) {
      window.location.reload();
    }else{
      return false;
    }
  }else
  if(localStorage.getItem("lang") == "ru") {
    if (confirm("Перезагрузить «Проигрыватель памяти»?")) {
      window.location.reload();
    }else{
      return false;
    }
  }
};