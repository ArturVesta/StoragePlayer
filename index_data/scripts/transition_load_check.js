function checkFuncCeck() {
  if (localStorage.getItem("yesanimation") === "true") {
    document.getElementById("checkKillAnim").checked = true;
  }else{ 
    document.getElementById("checkKillAnim").checked = false;
  }
};