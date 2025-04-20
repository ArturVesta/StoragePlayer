var autmodal = document.getElementById("autoModal");
var modalcontaut = document.getElementById("modalcontentaut");
var cbtnaut = document.getElementsByClassName("auto-close")[0];
cbtnaut.ondblclick = function() {
  autmodal.style.left = "-100%";
  if(document.getElementById("myNavigator").style.marginLeft) {
    document.body.style.overflowY = "hidden";
  }else{
    document.body.style.overflowY = "auto";
  }
};