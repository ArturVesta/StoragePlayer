// Keyboard on klicked !-Only PCs
document.onkeypress = function (event) {
  event = (event || window.event);
  if (event.keyCode == 123) {
    return false;
  }else
  if (event.keyCode == 13) {
    if(document.getElementById("e").style.display == "block"){
      document.getElementById("inputsubmitlink").click();
    }else{
      return false;
    }
  }
}
document.onmousedown = function (event) {
  event = (event || window.event);
  if (event.keyCode == 123) {
    return false;
  }else
  if (event.keyCode == 13) {
    if(document.getElementById("e").style.display == "block"){
      document.getElementById("inputsubmitlink").click();
    }else{
      return false;
    }
  }
}
document.onkeydown = function (event) {
  event = (event || window.event);
  if (event.keyCode == 123) {
    return false;
  }else
  if (event.keyCode == 13) {
    if(document.getElementById("e").style.display == "block"){
      document.getElementById("inputsubmitlink").click();
    }else{
      return false;
    }
  }
}