function killAnimation() {
  var checkbox = document.getElementById("checkKillAnim");
  var toggletext = document.getElementById("kaText");
  var ka = document.querySelectorAll('*');
  if(checkbox.checked === false) {
    if(localStorage.getItem("lang") == "en") {
      toggletext.innerHTML = "OFF";
    }else
    if(localStorage.getItem("lang") == "he") {
      toggletext.innerHTML = "כבוי";
    }else
    if(localStorage.getItem("lang") == "ru") {
      toggletext.innerHTML = "ВЫК";
    }
    for(var i=0;i<ka.length;i++){
      ka[i].style.transition = '0s';
      ka[i].style.webkitTransition = '0s';
      ka[i].style.mozTransition = '0s';
      ka[i].style.oTransition = '0s';
    }
  }else{
    if(localStorage.getItem("lang") == "en") {
      toggletext.innerHTML = "ON";
    }else
    if(localStorage.getItem("lang") == "he") {
      toggletext.innerHTML = "דלוק";
    }else
    if(localStorage.getItem("lang") == "ru") {
      toggletext.innerHTML = "ВКЛ";
    }
    for(var i=0;i<ka.length;i++){
      ka[i].style.transition = '0.6s';
      ka[i].style.webkitTransition = '0.6s';
      ka[i].style.mozTransition = '0.6s';
      ka[i].style.oTransition = '0.6s';
    }
  }
};