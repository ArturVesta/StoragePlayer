function checkFunc(){
  if (document.getElementById("checkKillAnim").checked === true) {
    document.documentElement.setAttribute('animation', '0.6s');
    localStorage.setItem("yesanimation", "true");
  } else {
    document.documentElement.setAttribute('animation', '0.0s');
    localStorage.setItem("yesanimation", "false");
  }
};