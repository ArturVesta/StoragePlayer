function oneUseMode() {
  document.getElementById("intmess").style.left = "0px";
  window.location.href='#OneMode';
  document.getElementById("oneuseappicon").style.display = "block";
  document.getElementById("setoneusetrue").disabled = true;
  document.getElementById("setoneusetrue").style.opacity = "0.5";
  setTimeout(() => {
    document.getElementById("intmess").style.left = "-100%";
    setTimeout(() => {
    document.getElementById("msgtext").innerHTML = "";
    },400);
  },6000);
};