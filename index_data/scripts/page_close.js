function questionClosepage() {
  if(localStorage.getItem("lang") == "en") {
    if (confirm("Close the «Storage Player»?")) {
      window.close();
    } else{
      return false;
    }
  }else
  if(localStorage.getItem("lang") == "he") {
    if (confirm("לסגור את «נגן האחסון»?")) {
      window.close();
    } else{
      return false;
    }
  }else
  if(localStorage.getItem("lang") == "ru") {
    if (confirm("Закрыть «Проигрыватель памяти»?")) {
      window.close();
    } else{
      return false;
    }
  }
};