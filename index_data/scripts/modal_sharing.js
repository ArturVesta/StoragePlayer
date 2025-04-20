var shrmodal = document.getElementById("shareModal");
var modalcontshr = document.getElementById("modalcontentshr");
var btnshr = document.getElementById("sharing");
var cbtnshr = document.getElementsByClassName("sharing-close")[0];
btnshr.onclick = function() {
  shrmodal.style.left = "0%";
  document.getElementById("myNavigator").style.overflowY = "hidden";
  setTimeout(() => {
    shrmodal.style.backgroundColor = "var(--opacity-bg)";
    shrmodal.style.backdropFilter = "blur(5px)";
  },340);
};
cbtnshr.onclick = function() {
  shrmodal.style.backgroundColor = "var(--transparent)";
  shrmodal.style.backdropFilter = "blur(0px)";
  setTimeout(() => {
    shrmodal.style.left = "-100%";
    document.getElementById("myNavigator").style.overflowY = "auto";
  },340);
};
shrmodal.onclick = function(event) {
  if (event.target == shrmodal) {
    shrmodal.style.backgroundColor = "var(--transparent)";
    shrmodal.style.backdropFilter = "blur(0px)";
    setTimeout(() => {
      shrmodal.style.left = "-100%";
      document.getElementById("myNavigator").style.overflowY = "auto";
    },340);
  }
};