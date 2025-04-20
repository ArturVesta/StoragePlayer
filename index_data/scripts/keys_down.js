document.onkeydown = function (event) {
  event = (event || window.event);
  if ((event.key === 'F12') ||
  (event.ctrlKey && event.shiftKey && event.key === 'I') ||
  (event.ctrlKey && event.shiftKey && event.key === 'C') ||
  (event.metaKey && event.altKey && event.key === 'I') ||
  (event.metaKey && event.shiftKey && event.key === 'C')
  ) {
    if(document.getElementById("administratorTools").checked === false) {
      event.preventDefault();
    }
  }else
  if (event.keyCode == 13) {
    if(document.getElementById("e").style.display == "block"){
      document.getElementById("inputsubmitlink").click();
    }else{
      return false;
    }
  }
}