function oneUseModeRefused() {
  document.getElementById("intmess").style.left = "0px";
  setTimeout(() => {
    document.getElementById("intmess").style.left = "-100%";
    setTimeout(() => {
    document.getElementById("msgtext").innerHTML = "";
    },400);
  },6000);
}