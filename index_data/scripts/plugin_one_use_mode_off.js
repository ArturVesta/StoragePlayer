function returnRepl() {
  history.back();
  document.getElementById("oneuseappicon").style.display = "none";
  document.getElementById("setoneusetrue").disabled = false;
  document.getElementById("setoneusetrue").style.opacity = "1";
};
 function detectBrowser(){
  window.onpopstate = function(event){
  document.getElementById("oneuseappicon").style.display = "none";
  document.getElementById("setoneusetrue").disabled = false;
  document.getElementById("setoneusetrue").style.opacity = "1";
  };
};